// ==UserScript==
// @name           MoviepilotEntertain
// @namespace      http://matthias-kuech.de 
// @description    A JavaScript Userscript for searching Telekom Entertain EPG from Moviepilot
// @include        http://www.moviepilot.de/*
// ==/UserScript==

//When showing tv schedule
try {
  for (var i=0; i<=document.getElementsByTagName('h3').length; i++) { var movieNumber = i; movieName = document.getElementsByTagName('h3')[movieNumber].getElementsByTagName('a')[0].text;
  	var link = document.createElement('a');
		link.setAttribute('href','https://www.entertain-to-go.de/dt/pctv/main/#page=search.searchterm&searchTerm='+movieName+'&tab=tv');
		link.innerHTML = 'Entertain';
		document.getElementsByClassName("links")[movieNumber].appendChild(link);
	}
}
catch (e)
{
}

//When showing single movie entry
var movieName = movieName = document.getElementsByTagName('h1')[0].innerHTML.trim();
var link = document.createElement('a');
link.setAttribute('href','https://www.entertain-to-go.de/dt/pctv/main/#page=search.searchterm&searchTerm='+movieName+'&tab=tv');
link.innerHTML = 'Entertain';
document.getElementsByClassName("actions")[0].appendChild(link); 
