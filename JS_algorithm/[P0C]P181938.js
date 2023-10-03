function solution(a, b) {
    var answer = 0;
    {
        Number(a + "" + b) >= 2 * a * b
            ? (answer = Number(a + "" + b))
            : (answer = 2 * a * b);
    }
    return answer;
}

console.log(solution(2, 91));

// [P0C] P181938 : 두 수의 연산값 비교하기
