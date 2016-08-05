chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  var a = document.createElement('a');
  a.href = tab.url;
  if (a.host === 'www.hengyirong.com') {
    chrome.pageAction.show(tabId);
  }
});
