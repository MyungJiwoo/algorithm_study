function solution(number, n, m) {
    var answer = 0;
    {
        number % n == 0 && number % m == 0 ? (answer = 1) : (answer = 0);
    }
    return answer;
}

console.log(solution(60, 2, 3));

// [P0C] P181936 : 공배수
