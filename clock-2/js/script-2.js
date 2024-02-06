let hours = document.getElementById("hour");
let min = document.getElementById("minute");
let second= document.getElementById("seconds");
let ampm = document.querySelector(".am")

function clock () {
    let date = new Date();
    let h = date.getHours() + 1;
    let m = date.getMinutes();
    let s = date.getSeconds();
    var am = "AM";
    if (h > 12) {
        h = h - 12;
        var am = "PM"
    }
    h = (h < 10 ) ? '0' + h : h ;
    m = (m < 10 ) ? '0' + m : m ;
    s  = (s < 10 ) ? '0' + s : s ;
    hours.innerHTML = h ;
    min.innerHTML = m;
    second.innerHTML = s;
    ampm.innerHTML = am;
}
setInterval(clock,1000);
