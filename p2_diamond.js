// P2. Diamond  (commit: "p2: diamond")
//
// node p2_diamond.js 5   prints a 5-wide diamond of '*'.
// n comes from process.argv[2]. Default: 5. Use only odd n.
//
//   *
//  ***
// *****
//  ***
//   *

const n = Number(process.argv[2] ?? 5);

let stars = 1;

for(let i=0;i<n;i++){
    const spaces = (n - stars) / 2;
    console.log(" ".repeat(spaces) + "*".repeat(stars));

    if(i<n/2 - 1){
        stars += 2;
    }else{
        stars -= 2;
    }
}


// TODO: print the diamond with for / if and console.log.
// Hint: for row i, count the spaces and the stars separately.
// Hint: "*".repeat(3) gives "***".
