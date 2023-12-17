var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

function myFunction() {
  document.getElementById("Menu").style.visibility = "visible";
}

function myFunction2() {
  document.getElementById("Menu").style.visibility = "hidden";
}

function BorderReset(){
  var dimensions= document.getElementById("img1");

  var heightx= dimensions.clientHeight;

  document.getElementById("BorderImg").style.height = heightx-60 + "px";
}

setTimeout(BorderReset, 0);
setTimeout(BorderReset, 0);
setTimeout(BorderReset, 0);

screen.orientation.addEventListener("change", function(e) {
    BorderReset();
});

window.onresize = function(){
  BorderReset();
  }
