//Farben
var colors = ["#5E2BFF", "#C04CFD", "#FC6DAB", "#EDF67D", "#DDD92A", "#63A375", "#713E5A", "#12355B", "#6153CC", "#44FFD1", "#F46036", "#177E89", "#004BA8",
				"#3E78B2", "#D81E5B", "#9EE493", "#374A67", "#436436", "#5EB1BF", "#848FA5", "#89043D", "#EAC435", "#2660A4", "#DE3C4B", "#BC8DA0", "#9E2B25"];

//Holt sich die Informationen von einem zufälligen Zitat von der API sobald auf den Button geklickt wird
function newQuote(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200){
			quoteInformation = JSON.parse(this.responseText);	//als Javascript Objekt
			var author = quoteInformation.author;
			var quote = quoteInformation.quote;	
			document.getElementById("quote").innerHTML = quote;
			document.getElementById("author").innerHTML = author;

			//eine zufällige Farbe:
			var color = colors[Math.floor(Math.random() * 25)];

			var backgroundColor = document.querySelector(".content");
			backgroundColor.style.background = color;

			var buttonColor = document.querySelector("button");
			buttonColor.style.color = color;

			//über Twitter teilen
			var tweetUrlTwitter = "https://twitter.com/intent/tweet?text="+quote+ " - "+author;
			document.getElementById("twitter").setAttribute("href", tweetUrlTwitter);

		}
	};
	request.open("GET", "http://quotes.stormconsultancy.co.uk/random.json", true);
	request.send();
}

newQuote();

