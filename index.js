
let box=document.getElementById("box")
console.log(box)
let a,h,m,s;
function dateTime(){
 a= new Date()
 h = a.getHours()
 m=a.getMinutes()
 s= a.getSeconds()
   return `${h}:${m}:${s}`
}


setInterval(()=>{
    box.innerHTML = dateTime()
  },1000) 

