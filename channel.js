var tile = document.querySelectorAll('.tile');
tile.forEach((item, index) => {
 var column = (index % 4) + 1;

 item.style.setProperty('--column', column);
});
var mode=document.getElementById("light/dark")
mode.addEventListener("click",()=>{
    document.documentElement.classList.toggle("light")})

