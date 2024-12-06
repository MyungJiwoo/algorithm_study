function solution(n, t) {
    let answer = n;

    for (let i = 0; i < t; i++) {
        answer *= 2;
    }

    return answer;
}

console.log(solution(2, 10));
console.log(solution(7, 15));
