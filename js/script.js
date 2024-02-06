let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let se = document.querySelector('#se');

setInterval(()=>{
    let day = new Date();
    let m = day.getMinutes()*6;
    let s = day.getSeconds()*6;
    let h = day.getHours() *30 + m / 2;
    hr.style.transform = `rotateZ(${h}deg)`;
mn.style.transform = `rotateZ(${m}deg)`;
se.style.transform = `rotateZ(${s}deg)`;
},1000)


