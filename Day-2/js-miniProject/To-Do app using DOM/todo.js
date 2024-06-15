let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    let newli = document.createElement("li");
    newli.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    newli.appendChild(delBtn);
    ul.appendChild(newli);
    inp.value = "";
});

// let delBtns = document.querySelectorAll(".delete");  // dont work for newly added task which is added by add button rather use below function
// for (const delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         par.remove();
//     });
// }

ul.addEventListener("click", function (e) {
    let par = e.target.parentElement;
    par.remove();
});
