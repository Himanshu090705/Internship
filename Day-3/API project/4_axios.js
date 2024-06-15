// Axios -> librery to make http requests

// using previous api code

// Axios -> in fetch it returns promise then we have to parse it into json but using axios dat will be automatically parsed

// random cat fact generator using button
// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         // console.log(res); // returns all info about API
//         // console.log(res.data); // returns only data part
//         // console.log(res.data.fact); // returns fact part

//         let result = res.data.fact;
//         return result;
//     } catch (err) {
//         console.log(err);
//         return "No fact found";
//     }
// }

// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// btn.addEventListener("click", async function () {
//     p.innerText = await getFacts();
// });

//random dog picture generator using button
// let url="https://dog.ceo/api/breeds/image/random";

// async function getDog(){
//     try{

//         let res=await axios.get(url);
//         return res.data.message;
//     }
//     catch(err){
//         return "Error! ";
//     }
// }

// let btn=document.querySelector("button");
// let img=document.querySelector("img")

// btn.addEventListener("click",async function(){
//     img.setAttribute("src",await getDog());
// })

// sending headers using axios
// let url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         const config = { headers: { Accept: "application/json" } };
//         let res = await axios.get(url, config);
//         console.log(res.data.joke);
//     } catch (err) {
//         console.log(err);
//     }
// }

// getJokes();

// Updating query string using axios
let url = "http://universities.hipolabs.com/search?country=";
// let country = "india";

let btn = document.querySelector("button");
let inp = document.querySelector("input");

btn.addEventListener("click", async () => {
    let val = inp.value;
    let ans = await getCollege(val);
    show(ans);
});

function show(ans) {
    let ul = document.querySelector("ul");
    ul.innerText = "";
    for (col of ans) {
        let li = document.createElement("li");
        li.innerText = col.name;
        ul.appendChild(li);
    }
}

async function getCollege(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

getCollege();
