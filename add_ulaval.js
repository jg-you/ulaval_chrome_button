
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.update({
      url: 'https://acces.bibl.ulaval.ca/login?qurl=' + encodeURIComponent(tab.url)
  });
});
