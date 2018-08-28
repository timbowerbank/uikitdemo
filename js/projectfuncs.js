// add js project funcs here...


// *** test listening for scrollspy events ***
// listen for scrollspy event on main page header
// it works really well - which means we could use GSAP if we found that UiKit animations aren't
// extensive enough...
// use a conditional statement to test for it's existence
var homePageElement = document.getElementById("mainHeaderHome");
if(homePageElement !== null) {
 document.getElementById("mainHeaderHome").addEventListener("inview", inviewListener);
}

function inviewListener() {
 console.log("mainHeaderHome is now in view...");
}
