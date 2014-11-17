chrome.tabs.onCreated.addListener(function(tab) {
  appendToLog(
      'tabs.onCreated -- window: ' + tab.windowId + ' tab: ' + tab.id +
      ' title: ' + tab.title + ' index ' + tab.index + ' url ' + tab.url);
  loadWindowList();
});