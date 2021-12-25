/*setInterval(function(){
    var skipButton = document.getElementsByClassName("ytp-ad-skip-button");
    if(skipButton != undefined && skipButton.length > 0){
        console.log("Ad detected");
        skipButton[0].click();
    }
},3000)

chrome.webRequest.onBeforeRequest.addListener(
    function(details){return {cancel: true};},
    {urls: defaultFilters},
    ["blocking"]

)
const defaultFilters = [
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
] */


// Language: javascript	

setInterval(function(){
 
	var skipButton = document.getElementsByClassName("ytp-ad-skip-button");
	if(skipButton != undefined && skipButton.length > 0){
		console.log("Ad detected");
		skipButton[0].click();
	}
},3000)