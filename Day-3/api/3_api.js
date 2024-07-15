// Free APIs for Project
// 1.Potter DB
// Docs - https://potterdb.com/?ref=apislist.com
// API - httpsULapL2QtteLdb-nml

// 2. Random Cats
// Docs - https://cataas.com/doc.html
// API - https://cataas.com

// 3. Reddit
// Docs - https://www.reddit.com/dev/api/
// API - https://wvm.reddit.com/r/Wallstreetbets/top.json

// 4. Food Facts
// Docs - https://wiki.openfoodfacts.org/API
// API - https://world.openfoodfacts.org/api/v0/product/737628064502.json

// 5. Random Jokes
// Docs - https://sv443.net/iokeapi/v2/
// API - https://v2.jokeapi.dev/joke/Any?safe-mode

// 6. Dictionary
// Docs - https://dictionaryapi.dev/
// API - https://api.dictionaryapi.dev/api/v2/entries/en/digital

// 7. Quotes
// Docs - https://pprathameshmore.github.io/QuoteGarden/
// API - https://quote-garden.onrender.com/api/v3/quotes

// 8. Library
// Docs - https://openlibrary.org/developers/api
// API - http://openlibrary.orq/api/volumes/brief/isbn/9780525440987.ison

// 9. Generates Fake Data
// Docs - https://fakerapi.it/en
// API - https://fakerapi.it/api/vl/credit cards? quantity=2

// 10. Football Data
// Docs - https://wwu.football-data.org/documentation/quickstart
// API - http://api.football-data.org/v4/competitions/

// Explore More APIs https://mixedanalvtics.com/bloq/list-actuallv-free-open-no-auth-needed-apis/

// API -> Application Programming Interface

// JSON -> JavaScript Object Notation

// accesing data from JSON -> two imp functions
// 1)JSON.parse(data)      -> to parse a string data into an object
// 2)JSON.stringify(data)  -> to parse a JS data object into JSON

let jsonRes =
    '{"fact":"A cats normal temperature varies around 101 degrees Fahrenheit.","length":64}';

// console.log(jsonRes);
let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);
// console.log(validRes.length);

let student = {
    name: "Unknown",
    marks: 95,
};

let jsonResponse = JSON.stringify(student);
// console.log(jsonResponse);

// For testing API requests -> tools - 1)hoppscoth(best)   2)postman

// AJAX -> Asychronous JavaScript and XML

// HTTP verbs ->
// 1) get -> to get res. from APIs
// 2) post -> along with api req. we are going to post something with it

// Status Codes ->
// 1) 200 - OK
// 2) 404 - not found
// 3) 400 - Bad request
// 4) 500 - Internal server error

// Additional info adding into URLs
// Query string -> https://www.google.com/search?q=harry+porter

// http headers -> used to supply additional info into req. as well as res.

// First api request -> APIs can be requested through fetch keyword.
let url = "https://catfact.ninja/fact";
// let url = "https://v2.jokeapi.dev/joke/Any?safe-mode";

// fetch(url) // returns promise so then and catch can be applied
//     .then((res) => {
//         // console.log(res); // this will only return readable stream but can't return the actual content
//         // console.log(res.json()); // this will return promise in which object has whole info of api
//         res.json().then((data) => {
//             console.log(data);
//         });
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// method chaining
// fetch(url)
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//         console.log(data.fact);
//         console.log(data.length);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// simultenously fetching of two api request
// fetch(url)
//     .then((res) => {
//         return res.json();
//     })
//     .then((data1) => {
//         console.log("data-1 :", data1);
//         return fetch(url);
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data2) => {
//         console.log("Data-2 :", data2);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// Using fetch with async
async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
    } catch (err) {
        console.log("Error -", err);
    }
}

getFacts();
