/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navToggle() {
    var x = document.getElementById("topnavToggle");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}
