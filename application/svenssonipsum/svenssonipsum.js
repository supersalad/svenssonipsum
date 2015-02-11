/*

Copyright (c) 2014 Andreas Folkesson

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

*/
//ensure console
var console = console || {log: function(){}}

var svensson = svensson || {};

(function(svensson) {
      
	  var separator = ",";
	  
	  //create list of phrases:
	  var svenssonPhrases = new Array();
	  
	  
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
	
	//return true if the phrase ends with comma
	function PhraseEndsWithComma(phrase){
		var lastChar = phrase.charAt(phrase.length - 1); 
		return (lastChar === separator)
	}
	
	//generate a paragraph, i.e. between 500 and 1000 characters
	function GetParagraph(){
			//console.log("Start generating a paragraphs");
			
			//random paragraph length between 500 and 1000 chars
			var paragraphLength = 500 + Math.floor(Math.floor(Math.random() * 500));
			
			var paragraph = "";
			var newSentence = true;
			
			while(paragraph.length < paragraphLength){
				var phrase = GetRandomPhrase();
				//First letter to upper if new sentence
				if (newSentence){
					phrase = phrase.charAt(0).toUpperCase() + phrase.substring(1);
					newSentence = false;
				}
				
				if (!PhraseEndsWithPunctuation(phrase)){
					//add comma if phrase is more than one word
					if (phrase.indexOf(" ") > -1)
						phrase += separator;
				}
				else{
					newSentence = true;
				}
				phrase += " ";
				
				paragraph += phrase;
				
			}
			
			//console.log("Finished generating a paragraphs");
			//ensure paragrah ends with puntuation
			paragraph = paragraph.trim();
			if (PhraseEndsWithComma(paragraph)){
				paragraph = paragraph.substr(0,paragraph.length-1) + ".";
			}
			
			return paragraph.trim();
	  }
	  
	  //init function
	  svensson.init = function(flavour){
		flavour = flavour || "default";
		var phrase_file_url = "/application/svenssonipsum/" + flavour + "/phrases.txt";
	  
		console.log("init svensson engine for " + flavour );
		
		//get phrases from text files
		$.ajax({
			url: phrase_file_url,
			crossDomain: true,
			dataType: "text",
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			success: function(data){
					svenssonPhrases = data.split("\n");
					}
			});

	  }
	  
	  
	  //ipsum generator function
	  svensson.ipsum = function(numberOfParagraphs, withPTags){
			console.log("Start generating " + numberOfParagraphs + " paragraphs");
			var ipsumString = ""//loremIpsum + separator;
			for(var i=0;i<numberOfParagraphs;i++){
				if (withPTags){
					ipsumString += "<p>";
				}
				
				ipsumString += GetParagraph();
				
				if (withPTags){
					ipsumString += "</p>";
				}
				ipsumString += "\n\n";
			}
			
			console.log("Finished generating " + numberOfParagraphs + " paragraphs");
			return ipsumString;
		};
	  
	  return svensson;
 }(svensson));
 