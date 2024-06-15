// forEach() -> used to print all Element from array

let arr1=[1,2,3,4,5];
arr1.forEach((el) => {
    // console.log(el);
});

arr1.forEach(function (el) {
    // console.log(el);
});

let print = function (el) {
    // console.log(el);
};
arr1.forEach(print);

let arr = [
    {
        name: "person1",
        mark: 95,
    },
    {
        name: "person2",
        mark: 93,
    },
    {
        name: "person3",
        mark: 91,
    },
];

arr.forEach((student) => {
    // console.log(student); // { name: 'person1', mark: 95 } { name: 'person2', mark: 93 } { name: 'person3', mark: 91 }
    // console.log(student.name); // person1 person2 person3
    // console.log(student.mark); // 95 93 91
});

let num1 = [1, 2, 3, 4];

let square = num1.map((el) => {
    return el * el;
});

// console.log(square);

num1.map((el) => {
    // console.log(el * el);
});

// filter() -> callback returns ele which satifies following condition
let num2 = [2, 4, 5, 7, 8, 9, 1, 6, 3];

let even = num2.filter((ele) => ele % 2 === 0);

// console.log(even);

// Every() -> returns true if every ele gives true for following function, or else returns false.

let num3 = [1, 2, 3, 4];
let num4 = [2, 4];

// console.log(num3.every((el) => el % 2 === 0));
// console.log(num4.every((el) => el % 2 === 0));
// console.log(num4.every((el) => el > 5));
// console.log(num4.every((el) => el < 5));

// Reduce() -> reduces the array to the single value
// arr.reduce(reducer function with 2 variable (accumulator,ele));

let num5 = [1, 2, 3, 4, 5];
// console.log(num5.reduce((res, el) => res + el));

// Practice que 
// -> check if all elements are muliple of 10 or not
let numarr=[10,20,30,5,40,11];
// console.log(numarr.every((el)=>(el%10===0)));

// -> Create a function to find min ele
let ans=numarr.reduce((min,el)=>{
    if(min>el){
        return el;
    }
    return min;
});
// console.log(ans);

// -----------------------------------------------------------------------------------------------------
// spread -> expands an iterable into multiple value
let number=[1,2,3,4,5];
// console.log(...number);              //  1 2 3 4 5
// console.log(number);                 // [ 1, 2, 3, 4, 5 ]
// console.log(Math.min(number));       // NaN
// console.log(Math.min(...number));    // 1

let newnumber1=[...number];             // same as let newnumber2 = number;
// console.log(newnumber1);             // [ 1, 2, 3, 4, 5 ]

let str="Hello";
let newstr1=[...str];                    // Copies data as array into new var               
let newstr2=str;                         // copies one string into another string
// console.log(newstr1);                 // [ 'H', 'e', 'l', 'l', 'o' ]
// console.log(newstr2);                 // Hello

// Rest -> Allows a function to take an indefinite number of args and bundle them into an array
 