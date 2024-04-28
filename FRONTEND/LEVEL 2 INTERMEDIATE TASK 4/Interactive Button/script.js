document.getElementById("colorChangeBtn").addEventListener("click", function () {
    changeBackgroundColor();
});
function changeBackgroundColor() {
    // Generate random RGB values
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    // Apply the new background color
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}
