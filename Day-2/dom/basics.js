// To select id -> document.getElementById("idname");
// To select class -> document.getElementsByClassName("classname");
// To select tag -> document.getElementsByTagName("tagname");

// Query Selectors ->
document.querySelector('p');            // Selects first p element
document.querySelector('#idname');      // Selects id 
document.querySelector('.classname');   // selects class

document.querySelectorAll('p');         // selects all p element

// Properties and methods
// innerText   -> shows the visible text contained in a node
// innerHTML   -> shows the full markup
// textContent -> Shows all the full text (shows hidden content)

// Here obj stands for document.querySelector() which is assigned as new variable;

// Manipulating attributes (getters and setters) 
obj.getAttribute(attr);
obj.setAttribute(attr,val);

// manipulating style
// obj.style can only access inline style , style included through other css file can't be accessed rather it can be changed

// using classList -> obj.classList

classList.add()         // to add new class
classList.remove()      // to remove class
classList.contains()    // to check if class exists
classList.toggle()      // to toggle between add and remove

// We can set class by two method 1) classList.add() and 2) setAttribute('class','classname')
// But the major difference is that in classList we can add multiple class, but in setAttribute we can set only one class if we set another class than previous will be automatically removed

// Navigation -> 1) parentElement    2) children  3) previousElementSibling/nextElementSibling

// Adding element -> document.createElement('p'); createElement() can only create element
obj.appendChild(ele);           // To add into document appendChild is used
obj.append(ele);                // not only element, but string / text can also be appended
obj.prepend(ele);               // append add ele to last, prepend add ele first/starting
obj.insertAdjcentElement(where,ele);

// position:
// 'beforebegin' : Before the targetElement itself.    // <btn> </btn> <p> </p>
// 'afterbegin'  : Just inside the targetElement, before its first child. // <p> <btn></btn> <b></b> </p>
// 'beforeend'   : Just inside the targetElement, after its last child.   // <p> <b></b> <btn></btn> </p>
// 'afterend'    : After the targetElement itself.     // <p> </p> <btn> </btn> 

// Removing element 

// parentEle.removeChild(ele);     -> here first parent is selected then its child is removed 
// ele.remove();                   -> directly remove whatever ele is passed 