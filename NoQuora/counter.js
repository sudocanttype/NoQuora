var bruh;
var counterspot = document.getElementById("counter");
chrome.storage.local.get(['counter'], function(result){
	bruh = result.counter;
	console.log('Bruh is ' + result.counter);
	if(bruh != undefined){
		counterspot.innerHTML = bruh;
	};

});



