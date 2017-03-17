function callback(){
	console.log(chrome.runtime.lastError);
}

chrome.contextMenus.create({
	contexts: ["link", "selection"],
	id: "imports",
	title: "Download URL",
	onclick: download
});

function download(data){
	var url = data.selectionText;
	chrome.downloads.download({
		url: url
	}, callback());
}
chrome.browserAction.onClicked.addListener(function(tab){
	chrome.app.window.create('window.html', 
	{
		bounds: {
			width: 800,
			height: 600
		}
	});
});