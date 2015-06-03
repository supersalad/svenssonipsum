<!DOCTYPE html>
<html lang="sv">
<head>
<title><?php echo $params["metadata"]["title"]; ?></title>
<meta name="description" content="<?php echo $params["metadata"]["description"]; ?>">
<meta name="keywords" content="<?php echo $params["metadata"]["keywords"]; ?>">
<link rel="author" href="https://plus.google.com/u/0/117217027477888743214"/>
<meta name="author" content="Andreas Folkesson">
<meta property="og:title" content="<?php echo $params["metadata"]["description"]; ?>"/>
<meta property="og:type" content="website"/>
<meta property="og:url" content="http://www.svenssonipsum.se<?php echo ($flavour) == "default"?"":"/".$flavour; ?>"/>
<meta property="og:description" content="<?php echo $params["metadata"]["og_description"]; ?>"/>
<meta property="fb:admins" content="746194269"/>


<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>

<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
<link rel="stylesheet" href="/application/svenssonipsum/svenssonipsum.css">
<link rel="stylesheet" href="/application/svenssonipsum/<?php echo $flavour ?>/style.css">

<script type="text/javascript">
	var flavour = '<?php echo $flavour ?>';

</script>

</head>
<body>
<header class="navbar navbar-static-top si-navbar" id="top" role="banner">
  <div class="container">
	<div class="navbar-collapse collapse">
		<ul class="nav navbar-nav navbar-right"> 
			<li>
				<a href="#about">om sidan</a>
			</li>
			<li class="dropdown">
				<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Alternativ <span class="caret"></span></a>
                <ul class="dropdown-menu" role="menu">
					<li><a href='/'>Svensson</a></li>
					<?php 
					foreach ($flavours as &$flavour) {
						echo "<li><a href='/" . $flavour . "'>" . $flavour . "</a></li>";
						}
					?>
                </ul>
			</li>
		</ul>
		
		
	</div>
  </div>
</header>

<div class="si-docs-header" id="content">
  <div class="container">
  
	<h1><?php echo $params["texts"]["header"]; ?></h1>
	<p><?php echo $params["texts"]["description"];	?></p>
	
  </div>
</div>

<div class="container si-main-content">
	<div class="row">
		<div class="col-sm-2">
			<form role="form">
				<div class="form-group">
					<label for="exampleInputEmail1"><?php echo $params["texts"]["howmanyparagraphs"]; ?></label>
					<input type="number" class="form-control" id="numberOfParagraphs" value="4">
				</div>
				<div class="checkbox">
					<label>
					  <input id="withPTags" type="checkbox"> P-taggar
					</label>
				</div>
				<div class="form-group">
					<button id="generate" class="btn btn-lg btn-default"><?php echo $params["texts"]["gobutton"]; ?></button>
				</div>
			</form>
		</div>
		<div class="col-sm-10">
			<form role="form">
				<div class="form-group">
					<textarea class="form-control" id="output" rows="20" style="display: none" spellcheck="false"></textarea>
				</div>
			</form>
		</div>
	</div>
</div>

<div id="about" class="container" style="padding-top:100px;">
	<div class="row">
		<div class="col-sm-6 si-about">
			<h2><?php echo $params["footer"]["faq_title"]; ?></h2>
			<?php 
				$i = 0; /* keep track of index */
				$faq_body;
				
				foreach ($params["footer"]["faq_header"] as $faq_header) {
					$faq_body = $params["footer"]["faq_body"][$i];
					
					echo "<div><strong>".$faq_header."</strong><p>".$faq_body."</p></div>";
					
					$i++;
				}
			?>
		</div>
	</div>
</div>

<footer class="si-footer">
	<div class="container">
		<div>
			<ul class="si-footer-buttons">
				<li>
					<a href="https://facebook.com/sharer.php?u=http://www.svenssonipsum.se/<?php echo $flavour ?>">Facebook</a>
				</li>
				<li>
					<iframe src="http://ghbtns.com/github-btn.html?user=supersalad&repo=svenssonipsum&type=fork"
  allowtransparency="true" frameborder="0" scrolling="0" width="62" height="20"></iframe>
				</li>
				<li>
					<a href="https://twitter.com/share" class="twitter-share-button" data-url="http://www.svenssonipsum.se" data-text="Svensson Ipsum" data-via="afolkesson" data-lang="sv" data-count="none">Tweeta</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>
				</li>
				<li><a href="#top">tillbaka till toppen</a></li>
			</ul>
		</div>
	</div>
</footer>

<script src="/application/svenssonipsum/svenssonipsum.js"></script>
<script type="text/javascript">

 $(document).ready(function(){
	$("#output").hide();
	
	svensson.init(flavour);
	
 	$("#generate").on("click", function(event){
		event.preventDefault();
		var numberOfParagraphs = $("#numberOfParagraphs").val();
		var pTags = $("#withPTags").prop( "checked" );
		var ipsumText = svensson.ipsum(numberOfParagraphs, pTags);
		$("#output").text(ipsumText);
		$("#output").show();
		$(".si-docs-header").hide();
	});
 });
</script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-49463330-1', 'svenssonipsum.se');
  ga('send', 'pageview');

</script>
</body>
</html>