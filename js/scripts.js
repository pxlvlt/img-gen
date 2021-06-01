//Haalt het menu op
var oReq = new XMLHttpRequest();
var sidebar = document.querySelector('#header');
oReq.addEventListener("load", reqListener);
oReq.open("GET", "./nav.html");
oReq.send();

function reqListener () {
 sidebar.innerHTML = this.responseText;
};