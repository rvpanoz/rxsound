// import { Observable, fromEvent, from } from "rxjs";
// import { delay, map, filter } from "rxjs/operators";
// import * as d3 from "d3";
// import Audio from "./lib/Audio";

// const WIDTH = 1024;
// const HEIGHT = window.innerHeight - 180;

// const createNextFibonacci = prev => next => {
//   return +(next + prev);
// };

// const fibonacciNumbers = [1, 1];
// const circleEl = document.getElementById("circle");
// const audioElement = document.getElementById("audio-content");
// const AudioInst = new Audio(audioElement);
// const stopControl = document.getElementById("stop-control");

// stopControl.addEventListener("click", e => {
//   AudioInst.stop();
// });

// for (var z = 1; z < 20; z++) {
//   const digits = fibonacciNumbers.slice(-2);
//   fibonacciNumbers.push(digits.reduce((acc, num) => acc + num, 0));
// }

// const MAX = Math.max(...fibonacciNumbers);
// const MIN = Math.min(...fibonacciNumbers);

// const scaleX = d3
//   .scaleLinear()
//   .domain([MIN, MAX])
//   .range([0, WIDTH]);

// const scaleY = d3
//   .scaleLinear()
//   .domain([MIN, MAX])
//   .range([0, HEIGHT]);

// const fibonacciNumbers$ = from(fibonacciNumbers).pipe(
//   map(num => ({
//     y: num + 1,
//     x: num + 1
//   }))
// );

// const move = position => {
//   const { x, y } = position;

//   d3.select(circle)
//     .transition()
//     .attr("style", `top:${scaleY(y)};left:${scaleX(x)}`);
// };

// fibonacciNumbers$.subscribe(pos => move(pos));

// AudioInst.play();
