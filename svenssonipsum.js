var svensson = svensson || {};

(function(svensson) {
      
	  
	  //create list of phrases:
	  var loremIpsum = "Lorem ipsum dolor sit amet";
	  var separator = ",";
	  
	  var svenssonPhrases = new Array();
	  
	  svenssonPhrases.push("vad hette det sa du?");
	  svenssonPhrases.push("va, vi bor i Mjölby");
	  svenssonPhrases.push("jo du så att");
	  svenssonPhrases.push("efter regn kommer solsken");
	  svenssonPhrases.push("upp som en sol ner som en pannkaka");
	  svenssonPhrases.push("vilket väder vi har fått");
	  svenssonPhrases.push("tack för senast");
	  svenssonPhrases.push("tack för kaffet");
	  svenssonPhrases.push("vilket gott kaffe");
	  svenssonPhrases.push("rummen lämnas klockan 12 och väskorna lämnas i receptionen");
	  svenssonPhrases.push("finns det svenskt kaffe på hotellet?");
	  svenssonPhrases.push("strålande tider, härliga tider");
	  svenssonPhrases.push("surt sa räven");
	  svenssonPhrases.push("och hon ser ut som hon öppnat sin senaste elräkning");
	  svenssonPhrases.push("glöm aldrig bort det!");
	  svenssonPhrases.push("gudars skymning!");
	  svenssonPhrases.push("ååh så söt hon är");
	  svenssonPhrases.push("vi har en blandning av loppisfynd och ikea");
	  svenssonPhrases.push("han har charm som en karl, han är fräck som en karl, nonchalant som en karl och han rööör sig som en karl ska.");
	  svenssonPhrases.push("skulle du vilja vara så vänlig och fylla i den här blanketten");
	  svenssonPhrases.push("Sverige, vi har ett resultat!");

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
			//if phrase doesn't end with punctuation - add a comma.
			var lastChar = phrase.charAt(phrase.length - 1); 
			if (lastChar !== "." && lastChar !== "," && lastChar !== "!" && lastChar !== "?"){
				phrase += separator;
			}
			//add a space
			phrase += " ";
			return phrase;
	  }
	  
	//generate a paragraph, i.e. a bit more than 512 characters
	function GetParagraph(){
			console.log("Start generating a paragraphs");
			var paragraph = "";
			while(paragraph.length < 512){
				paragraph += GetRandomPhrase();
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
 