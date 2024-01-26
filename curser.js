
var curser1 = document.querySelector(".curser1");
var curser2 = document.querySelector(".curser2");
var curser3 = document.querySelector(".curser3");
var sec = document.querySelector("html")

sec.addEventListener("mousemove",function (dets) {
    curser1.style.left=dets.x+"px";
    curser1.style.top=dets.y+"px";
  
    curser2.style.left=dets.x+"px";
    curser2.style.top=dets.y+"px";
  
    curser3.style.left=dets.x+"px";
    curser3.style.top=dets.y+"px";
  
})
