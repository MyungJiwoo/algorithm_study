function solution(num, n) {
    var answer = 0;
    {
        num % n == 0 ? (answer = 1) : (answer = 0);
    }
    return answer;
}

console.log(solution(98, 2));

// [P0C] P181937 : n의 배수
