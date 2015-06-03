<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Ipsum extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/ipsum
	 *	- or -  
	 * 		http://example.com/index.php/ipsum/index
	 *	- or -
	 * Since this controller is set as the default controller in 
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/ipsum/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
	public function index($flavour = "default")
	{
		$flavour = strtolower($flavour);
	
		//load available flavours
		$flavours = array();
		$counter = 0;
		$svenssonpath = getcwd() . '/application/svenssonipsum';
		
		//scan the folders in the svenssonipsum folder
		$folders = scandir($svenssonpath);
		foreach ($folders as &$folder) {
			if ($folder != "." && $folder != ".." && $folder != "default" && is_dir($svenssonpath . "/" . $folder)){
				$flavours[$counter] = ucfirst($folder;
				$counter++;
			}
		}

		// if ($handle = opendir($svenssonpath)) {


		// 	/* This is the correct way to loop over the directory. */
		// 	while (false !== ($entry = readdir($handle))) {
		// 		if ($entry != "." && $entry != ".." && $entry != "default" && is_dir($svenssonpath . "/" . $entry)){
		// 			$flavours[$counter] = ucfirst($entry);
		// 			$counter++;
		// 		}
		// 	}

		// 	closedir($handle);
		// }
		
		//$flavours = getcwd();
		
		//read ini file
		$ini_array = parse_ini_file($svenssonpath . "/" . $flavour . "/params.ini", true);
		
		//pass on flavour setting and params to the view
		$data['flavours'] = $flavours;
		$data['flavour'] = $flavour;
		$data['params'] = $ini_array;
		$this->load->view('ipsum', $data);
	}
	
	
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */