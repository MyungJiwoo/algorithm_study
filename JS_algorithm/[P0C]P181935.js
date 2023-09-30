function solution(n) {
    var answer = 0;
    if (n % 2 == 0) {
        for (let i = 0; i <= n; i++) {
            if (i % 2 == 0) {
                answer += i ** 2;
            }
        }
    } else {
        for (let i = 0; i <= n; i++) {
            if (i % 2 == 1) {
                answer += i;
            }
        }
    }
    return answer;
}

console.log(solution(7));

// [P0C] P181935 : 홀짝에 따라 다른 값 반환하기
