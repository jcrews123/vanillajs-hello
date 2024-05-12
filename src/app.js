/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

//function getRandomNumber(a, b) {
// return Math.floor(Math.random() * (b - a) + a);
//}

function getRandom(anyArray) {
  let random = Math.floor(Math.random() * anyArray.length);
  return random;
  //return anyArray[random];
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector("#excuse").innerHTML =
    who[getRandom(who)] +
    " " +
    action[getRandom(action)] +
    " " +
    what[getRandom(what)] +
    " " +
    when[getRandom(when)];
};
