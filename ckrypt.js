"use strict";

// let number = 4.6;

// console.log (-4/0);
// console.log('string' * 9);
// const persone = "Zhopa"
// const bpol = true;
// console.log(some);
// const vrvr = {
//     name: "fjhgjf",
//     age: 42,
//     isFuck: true
// };

// // console.log(vrvr.name);
// console.log(vrvr ["age"]);

// let arr = ["awdaw", "awdaa", 234, "sda", {}, []]
// console.log(arr[2]);
// alert ("kajedkja");
//  const resu = confirm("asdasdas&")
//  console.log(resu);
// const ans = prompt("zhopa?", "2")
// console.log(ans);

// const answers = [];

// // answers [0] = prompt("ваше?");
// // answers [1] = prompt("имя?");
// // answers [2] = prompt("наше?");
// // answers [3] = prompt("ихнее?");

// // document.write(answers);
 
// console.log(typeof(answers));
let number0fFilms;

number0fFilms = prompt("Cколько фильмов вы посмотрели?", "");

let
 a = prompt("Фильм?", ""),
 b = prompt("оценка?", ""),
 c = prompt("Фильм?", ""),
 d = prompt("оценка?", "");

let personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(number0fFilms);
console.log(personalMovieDB)