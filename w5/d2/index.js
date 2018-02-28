var ul = document.getElementsByClassName("active")[0].parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild;
var b = document.getElementsByClassName('active')[0];

ul.className="active";
b.className = " ";



function test1 (){

  var x =  document.getElementsByClassName("selected")[0];
  
  
  var y = x.parentElement.nextElementSibling.firstElementChild.nextElementSibling;
  y.className="selected";
  x.className="";

}






