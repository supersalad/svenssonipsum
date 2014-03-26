var svensson = svensson || {};

(function(svensson) {
      
	  var separator = ",";
	  
	  //create list of phrases:
	  var svenssonPhrases = new Array();
	  
	  //get phrases from text files
	  $.ajax({
		url: "svenssonphrases.txt",
		crossDomain: true,
		dataType: "text",
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		success: function(data){
				svenssonPhrases = data.split("\n");
				}
			});

	var lastRandomIndex = -1;
	  //get a random phrase from the collection
	function GetRandomPhrase(){
			var randomIndex = Math.floor(Math.random() * svenssonPhrases.length);
			//ensure not same phrase twice in a row
			while(randomIndex === lastRandomIndex){
				randomIndex = Math.floor(Math.random() * svenssonPhrases.length);
			}
			lastRandomIndex = randomIndex;
			var phrase = svenssonPhrases[randomIndex].trim();
			
			return phrase;
	  }
	 
	//return true if the phrase ends with punctuation
	function PhraseEndsWithPunctuation(phrase){
		var lastChar = phrase.charAt(phrase.length - 1); 
		return (lastChar === "." || lastChar === "," || lastChar === "!" || lastChar === "?")
	}
	
	//generate a paragraph, i.e. a bit more than 512 characters
	function GetParagraph(){
			console.log("Start generating a paragraphs");
			
			//random paragraph length between 500 and 1000 chars
			var paragraphLength = 500 + Math.floor(Math.floor(Math.random() * 500));
			
			var paragraph = "";
			var newSentence = true;
			
			while(paragraph.length < 512){
				var phrase = GetRandomPhrase();
				//First letter to upper if new sentence
				if (newSentence){
					phrase = phrase.charAt(0).toUpperCase() + phrase.substring(1);
					newSentence = false;
				}
				
				if (!PhraseEndsWithPunctuation(phrase)){
					phrase += separator;
				}
				else{
					newSentence = true;
				}
				phrase += " ";
				
				paragraph += phrase;
				
			}
			console.log("Finished generating a paragraphs");
			return paragraph.trim();
	  }
	  
	  //ipsum generator function
	  svensson.ipsum = function(numberOfParagraphs){
			console.log("Start generating " + numberOfParagraphs + " paragraphs");
			var ipsumString = ""//loremIpsum + separator;
			for(var i=0;i<numberOfParagraphs;i++){
				ipsumString += GetParagraph();
				ipsumString += "\n\n";
			}
			
			console.log("Finished generating " + numberOfParagraphs + " paragraphs");
			return ipsumString;
		};
	  
	  return svensson;
 }(svensson));
 