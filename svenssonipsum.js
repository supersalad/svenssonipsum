var svensson = svensson || {};

(function(svensson) {
      
	  
	  //create list of phrases:
	  var loremIpsum = "Lorem ipsum dolor sit amet";
	  var separator = ",";
	  
	  var svenssonPhrases = new Array();
	  
	  svenssonPhrases.push("vad hette det sa du?");
	  svenssonPhrases.push("va, vi bor i Mj�lby");
	  svenssonPhrases.push("jo du s� att");
	  svenssonPhrases.push("efter regn kommer solsken");
	  svenssonPhrases.push("upp som en sol ner som en pannkaka");
	  svenssonPhrases.push("vilket v�der vi har f�tt");
	  svenssonPhrases.push("tack f�r senast");
	  svenssonPhrases.push("tack f�r kaffet");
	  svenssonPhrases.push("vilket gott kaffe");
	  svenssonPhrases.push("rummen l�mnas klockan 12 och v�skorna l�mnas i receptionen");
	  svenssonPhrases.push("finns det svenskt kaffe p� hotellet?");
	  svenssonPhrases.push("str�lande tider, h�rliga tider");
	  svenssonPhrases.push("surt sa r�ven");
	  svenssonPhrases.push("och hon ser ut som hon �ppnat sin senaste elr�kning");
	  svenssonPhrases.push("gl�m aldrig bort det!");
	  svenssonPhrases.push("gudars skymning!");
	  svenssonPhrases.push("��h s� s�t hon �r");
	  svenssonPhrases.push("vi har en blandning av loppisfynd och ikea");
	  svenssonPhrases.push("han har charm som en karl, han �r fr�ck som en karl, nonchalant som en karl och han r���r sig som en karl ska.");
	  svenssonPhrases.push("skulle du vilja vara s� v�nlig och fylla i den h�r blanketten");
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
 