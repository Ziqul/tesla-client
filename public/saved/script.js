var currentUrl = new URL(window.location.href);
var ai = currentUrl.searchParams.get('ai');

var idContainer = document.querySelector('#article-id');
idContainer.innerText = ai || '[No ID found]';
