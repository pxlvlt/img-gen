//Haalt het menu op
 var oReq = new XMLHttpRequest();
 var sidebar = document.querySelector('#header');
 oReq.addEventListener("load", reqListener);
 oReq.open("GET", "./nav.html");
 oReq.send();

 function reqListener () {
  sidebar.innerHTML = this.responseText;
 };

 //Mobile menu
 $("#header").on("click", "#mobMenuIcon", function(){
  console.log("Click on icon");
  $("i").toggleClass("fa-times");
  $("#navbar").toggleClass("active");
  $("#app").toggleClass("menuOpen");
  $("#content").toggleClass("menuOpen");
 });

 //Maak div's clickable
 $(".item").click(function(){
  window.location=$(this).find("a").attr("href");
  return false;
 });
