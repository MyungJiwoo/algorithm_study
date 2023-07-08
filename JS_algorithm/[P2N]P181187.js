let r1 = 2;
let r2 = 3;

function c(r) {
    let count = 1;
    for (let i = 0; i < r; i++) {
        count += 3;
    }
    return count;
}

let count1 = c(r1);
let count2 = c(r2);

console.log(count1);
console.log(count2);
console.log(count2 - count1);
