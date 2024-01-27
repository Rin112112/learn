"use strict";
// let number = 7;
// const rightBoarderWidth = 2;
// console.log(number);
// // number = 18;
// // console.log(number);
// // const result = confirm(`are you chlen&`);
// // console.log(result);
// // const answer = prompt(`Будешь?`, '');
// // console.log(answer + 7);
// const answers = {};
// answers [1] = prompt (`Туя?`, ``);
// answers [0] = prompt (`Туя?`, ``);
// answers [2] = prompt (`Туя?`, ``);
// console.log(answers);
// let incr = 10,
//     decr = 10;
//     incr++;
//     decr--;
//     console.log(incr);
//     console.log(decr);-->
const number0fFilms = prompt (`Сколько фильмов вы уже помиотрели?`, ``);

// const answer = [];
// answer[0] = prompt (`последний фильм?`, ``);
// answer[1] = prompt (`последний фильм?`, ``);
// answer[2] = prompt (`оценка?`, ``);
// answer[3] = prompt (`оценка?`, ``);2

// const obj = {
//     Count: number0fFilms,
//     Movies: {answer},
//     Actors: {},
//     Genres: [],
//     Privat: Boolean `false`
// }
// console.log(obj.Movies);
// console.log(obj.Count);
// const 
// a = prompt(`Фильм?`, ``),
// b = prompt(`Оценка?`, ``),
// c = prompt(`Фильм?`, ``),
// d = prompt(`оценка`,``);

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// personalMovieDB.count;
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;
// console.log(personalMovieDB);
// for (let i = 1; i < 3;) {
// personalMovieDB.movies[a] = b;
// }
// while (personalMovieDB.count < 10) {
//     alert(`Мало`)
//     break;
    
// };
// while (personalMovieDB.count > 10 < 30) {
//     alert(`норм`)
//     break;
// };

//     while (personalMovieDB.count > 30) {
//         alert(`ЗБС`)
//         break;
//     };
for (let i = 0; i < 2; i++) {
    const 
a = prompt(`Фильм?`, ``),
b = prompt(`Оценка?`, ``);
    if (a != null && b != null && a != `` && b != `` && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log(`done`);
    }
    else {
        console.log(`error`);
        --i;
    }
}
if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
    alert(`Мало`);
}
else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert(`норм`);

}
else if (personalMovieDB.count >= 30) {
    alert (`збс`);
}
else if (personalMovieDB.count = null && personalMovieDB.count == "") {
    alert (`WTF?`);
}
console.log(personalMovieDB);