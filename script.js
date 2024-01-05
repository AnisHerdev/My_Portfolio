let age = document.getElementById("myage");
let time = new Date();
document.getElementById("year").innerHTML=`${time.getFullYear()}`;
if(time.getMonth()>8)
{    
    age.innerHTML = time.getFullYear()-2005;
}
else
{
    if(time.getDate()>=14)
    age.innerHTML = time.getFullYear()-2005;
    else
    age.innerHTML = time.getFullYear()-2005-1;
}
function changeText(){
    let width = window.innerWidth;
    let top = document.getElementById('up');
    if(width<600){
        top.innerHTML=' ';
    }
    else
        top.innerHTML='Go to top';
}
changeText();
window.addEventListener('resize',changeText);
