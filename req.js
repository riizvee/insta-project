
var frnd = document.querySelector(".frndreq");
var fr = document.querySelector(".f-r");
var st = document.querySelector(".status");
var rm = document.querySelector("#rem");

fr.addEventListener("click",function (params) {
    st.innerHTML="friend";
    st.style.color="green";
    fr.style.display="none";
    rm.style.width="100%"
})
 
 rm.addEventListener("click",function (params) {
    frnd.style.display="none";
 })

//var inreq =document.querySelector(".insreq");
//
//var arr= [ 
//
//dp:"catty1.jpg"},
//
//dp:"catty1.jpg"},
//
//dp:"catty1.jpg"}
//
//]
//
//ar clutter ="";
//
//rr.forEach(element => {
//clutter += `<div class="frndreq">
//<div class="profile">
//
//<div class="img"></div>
//
//<span>rizvi</span>
//
//<div class="status">stranger</div>
//
//</div>
//
//<div class="req">
//
//<button id="rem">remove</button>
//<button class="f-r">friend request</button>
//
//</div>`
//});
//
//inreq.innerHTML=clutter;