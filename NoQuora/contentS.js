var x;var fuck;
fuck = window.location.href;
if (fuck.indexOf('?share=1') == -1){ //check if it is forcing you to make an account
	x = fuck + "?share=1";
	chrome.runtime.sendMessage({redirect:x});//redirect to clear page
	chrome.storage.local.get('counter', function(result) { //do the counter shit
		if (result.counter == undefined){
			chrome.storage.local.set({'counter': 1});
		}else{
			chrome.storage.local.set({'counter': result.counter + 1});
		}
	});
};
//chrome.storage.local.get(['counter'], function(result) {
//	console.log('Value currently is ' + result.counter);
//});
// Debugging 

