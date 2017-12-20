function changePicture() {
    console.log(document.getElementById("demoPicture").style.display);
    var display = document.getElementById("demoPicture").style.display;
    if (display == "block") {
        document.getElementById("demoPicture").style.display = "none";
    } else {
        document.getElementById("demoPicture").style.display = "block";
    }
}

function calcSum() {
    var first = parseInt(document.getElementById("first").value);
    var second = parseInt(document.getElementById("second").value);
    var sum = first + second;
    document.getElementById("sum").innerText = sum.toString();
}
