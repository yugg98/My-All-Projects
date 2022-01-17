const deg = 6;
const hr = document.getElementsByClassName("hr")
const mn = document.getElementsByClassName("mn")
const sc = document.getElementsByClassName("sc")
const date = new Date();
const hh = date.getHours()*30;
const mm = date.getMinutes()*30;
const ss = date.getSeconds()*30;
hr.style.transform= `rotateZ(${(hh)+(mm/12)}deg)`
mn.style.transform = `rotateZ(${(mm)}deg)`
sc.style.transform = `rotateZ(${(ss)}deg)`


