// DOM Events
// onclick (when Element is clicked)
// onmouseenter (when mouse enters in element)

// Event Listener
// Element.addEventListner(event,callback);

function callback(event){
    event.preventdefault();     // Used to stop the redirection of form when submitted
    event.stopPropagation();    // Used to stop event bubbling(when child is clicked then parent also get affected)
}