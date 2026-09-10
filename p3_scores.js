// P3. Scores pipeline  (commit: "p3: scores pipeline")
//
// Pipeline: keep odd numbers -> double them -> sort descending -> keep the first half
//
// (a) Step by step. One variable per step, print the array after each step.
// (b) The whole pipeline as a single method chain. Print only the result.
// (c) Print scores once more at the end. Is it still the same? Why?
//
// You will need: filter, map, sort, slice, and Math.ceil.
// Not sure what one of them does? Look it up (MDN) before asking.

const scores = Array.from({ length: 20 }, () => Math.floor(Math.random() * 101));
console.log("start:", scores);

// (a) 
const odds = scores.filter(n=>n%2 !== 0);
console.log("odds:",odds);

const double = odds.map(n=>n*2);
console.log("double:",double);

const descend = double.sort((a,b) => b-a);
console.log("descend:",descend);

const half = Math.ceil(descend.length/2);
const firsthalf = descend.slice(0,half);
console.log("firsthalf:",firsthalf);
// (b)
const result = scores.filter(n=>n%2 !== 0).map(n=>n*2).sort((a,b) => b-a).slice(0,Math.ceil(scores.filter(n => n % 2 !== 0).length / 2));
console.log("pipeline result:",result);


// (c)
console.log("pipeline result:",result);
// 이유는 filter 와 map이 원본을 수정하지 않고 복사본에 배열을 생성했기 때문입니다.