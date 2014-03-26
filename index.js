
 $(document).ready(function(){
	$("#output").hide();
	
 	$("#generate").on("click", function(event){
		event.preventDefault();
		var numberOfParagraphs = $("#numberOfParagraphs").val();
		var ipsumText = svensson.ipsum(numberOfParagraphs);
		$("#output").text(ipsumText);
		$("#output").show();
		$(".si-docs-header").hide();
	});
 });