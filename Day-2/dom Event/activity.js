let btn=document.querySelector('button');
document.addEventListener("click",changeColor);

function changeColor(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    
    let h3=document.querySelector('h3');
    let div=document.querySelector('div');
    h3.innerText=`RGB(${r},${g},${b})`;
    div.style.backgroundColor=`rgb(${r},${g},${b})`;
}

