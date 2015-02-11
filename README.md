Svensson Ipsum
=========

This is a simple lorem ipsum generator using javascript. 
It has been made to provide the public with a lorem ipsum generator in the swedish language.

The generator is located at http://www.svenssonipsum.se

The site that hosts the generator is built with Codeigniter. The controller and view that makes up the full site are called ipsum.php.


Creating a customized version
---------
Under the application folder is a folder called svenssonipsum. Each subfolder in this folder makes up a customized ipsum generator.
Each such folder must contain the following files:
 * params.ini
	This file contains texts that are included on the page of the ipsum generator, and in the meta tags.
 * style.css
	Css overrides. Plain and simple.
 * phrases.txt
	The phrase list is a line separated text file. Each line represents a phrase. If the phrase ends with punctuation it will end the current sentence. If the phrase is a single word it will add it to the next phrase. If the phrase consists of multiple words it will add a trailing comma.
The first letter in each new sentence will be made upper case.

I gladly accept additional ipsum generators to add on the site. 

Have fun!

