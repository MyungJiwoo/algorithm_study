// P120808 : 분수의 덧셈

function solution(numer1, denom1, numer2, denom2) {
    const numer = numer1 * denom2 + numer2 * denom1;
    const denom = denom1 * denom2;
    const getGCD = (a, b) => (a % b == 0 ? b : getGCD(b, a % b));
    const gcd = getGCD(numer, denom);
    return [numer / gcd, denom / gcd];
}

console.log(solution(1, 2, 3, 4)); // 1/2 + 3/4 = 2/4 + 3/4 = 5/4
console.log(solution(9, 2, 1, 3)); // 9/2 + 1/3 = 27/6 + 2/6 = 29/6

// 문제는 기약분수. 약분해야 한다.
