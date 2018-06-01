var s = document.createElement('script');
s.src = chrome.extension.getURL('content.js');
s.onload = function() {
}
document.head.appendChild(s);
