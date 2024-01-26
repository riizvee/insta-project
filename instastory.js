document.addEventListener("DOMContentLoaded", function() {
    var stry = document.querySelector(".story");
    var strys = document.querySelector(".storys")

    var arr = [
        {
            dp:"img/catty1.jpg",story:"img/catty1.jpg"
            },
            
            {
            dp:"img/catty6.jpg",story:"img/catty2.jpg"
            },
            
            {
            dp:"img/catty1.jpg",story:"img/catty3.jpg"
            },
            
            {
                dp:"img/catty4.jpg",story:"img/catty4.jpg"
            },
            {
            dp:"img/catty1.jpg",story:"img/catty1.jpg"
            },
            
            {
            dp:"img/catty6.jpg",story:"img/catty2.jpg"
            },
            
            {
            dp:"img/catty1.jpg",story:"img/catty3.jpg"
            },
            
            {
                dp:"img/catty4.jpg",story:"img/catty4.jpg"
            },
            
    ];

    var clutter = "";

    arr.forEach((elem, indx) => {
        clutter += `<div class="story"><img id="${indx}" src="${elem.dp}" alt="" ></div>` ;
    });

    strys.innerHTML = clutter;

    // Add the click event listener to individual elements with the class "story"
    var storyElements = document.querySelectorAll('.story');
    storyElements.forEach((storyElement, index) => {
        storyElement.addEventListener("click", function(dets) {
            console.log(dets.target);
            document.querySelector(".fullscreen").style.display = "block";
            document.querySelector("main").style.overflowY="hidden";
            document.querySelector(".fullscreen").style.backgroundImage = `url(${arr[index].story})`;

            setTimeout(() => {
                document.querySelector(".fullscreen").style.display = "none";
                document.querySelector("main").style.overflowY="scroll";
            }, 3000);
        });
    });
});

// Initial value
var grow = 0;

// Function to update the width
function bar() {
    document.querySelector(".grow").style.width = `${grow++}%`;

    // Reset to 0 when grow reaches 100
    if (grow <= 100) {
        grow = 0;
    }
}

//// Check if grow is less than 100 before starting the loop
//if (grow < 100) {
//    // Set an interval to update the width
//    setInterval(bar, 30);
//}
//