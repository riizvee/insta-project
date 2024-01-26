

var stry = document.querySelectorAll(".story");
var strys = document.querySelector(".storys ")


var arr=[
{
dp:"catty1.jpg",story:"catty1.jpg"
},

{
dp:"catty6.jpg",story:"catty2.jpg"
},

{
dp:"catty1.jpg",story:"catty3.jpg"
},

{
    dp:"catty4.jpg",story:"catty4.jpg"
},
{
dp:"catty1.jpg",story:"catty1.jpg"
},

{
dp:"catty6.jpg",story:"catty2.jpg"
},

{
dp:"catty1.jpg",story:"catty3.jpg"
},

{
    dp:"catty4.jpg",story:"catty4.jpg"
},

];


clutter="";

arr.forEach((elem,indx) => {
 clutter += `<div class="story"><img id="${indx}" src="${elem.dp}" alt="">
 </div>`;
});
strys.innerHTML=clutter



stry.addEventListener("click",function (dets){

console.log(dets.target);
           document.querySelector(".fullscreen").style.display="block";
     document.querySelector(".fullscreen").style.backgroundImage=`url(${arr[dets.target.id].story})`
    
    
     setTimeout(() => {
        document.querySelector(".fullscreen").style.display="none";
}, 1500);
    
    });

    

//   strys.addEventListener("click",function (dets){
//       document.querySelector(".fullscreen").style.display="block";
//     document.querySelector(".fullscreen").style.backgroundImage=`url(${arr[dets.target.id].story})`});
//
    
//
// 
//






//for stop the display

//grow
//
//var grow =0;
// if (grow<100) {
//    
//setInterval(() => {
//    document.querySelector(".grow").style.width=`${grow++}%`
//}, 30);  
//
// } else {
//   var grow=0;
// }  
//
////grow
//    });
//    //this braches important









//var grow =0;
//
//if (grow<100) {
//    
//    setInterval(() => {
//        document.querySelector(".grow").style.width=`${grow++}%`;
//    
//    }, 30);  
//    
//    }  else{
//        var grow=0;
//     } 

    



//if (grow<100) {
//    
//setInterval(() => {
//    document.querySelector(".grow").style.width=`${grow++}%`;
//
//}, 30);
//
//} else {
//    grow =0;
//}
    



//strys.addEventListener("click",function (dets) {
//   console.log(dets); 
//})arr[dets.target.id].story
//``
//strys.addEventListener("click",function (dets) {
  //  document.querySelector(".fullscreen").style.display="block";
  //  document.querySelector(".fullscreen").style.backgroundImage=`url(${arr[dets.target.id].story})`
