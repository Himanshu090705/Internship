// DOM Events
// onclick (when Element is clicked)
// onmouseenter (when mouse enters in element)

// Event Listener
// Element.addEventListner(event,callback);

function callback(event) {
    event.preventdefault(); // Used to stop the redirection of form when submitted
    event.stopPropagation(); // Used to stop event bubbling(when child is clicked then parent also get affected)
}

let btn = document.querySelector("button");
btn.addEventListener("click", changeColor);

function changeColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let h3 = document.querySelector("h3");
    let div = document.querySelector("div");
    h3.innerText = `RGB(${r},${g},${b})`;
    div.style.backgroundColor = `rgb(${r},${g},${b})`;
}
