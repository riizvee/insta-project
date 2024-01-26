
var i = document.querySelector(".ri-heart-fill");
var is = document.querySelector(".ri-heart-2-fill");
var ins = document.querySelector(".post");

var red=0;
ins.addEventListener("dblclick", function (params) {
    is.style.color = "red";
    i.style.display = "block";
var red =1;
    setTimeout(() => {
        i.style.display = "none";
    }, 800);

});


var p2 = document.querySelector(".post2");
var r2 = document.querySelector(".r2");
var rh2 =document.querySelector(".rh2");

p2.addEventListener("dblclick",function (params) {
  r2.style.display="block";
rh2.style.color ="red"

setTimeout(() => {
    r2.style.display="none";
}, 800);

})