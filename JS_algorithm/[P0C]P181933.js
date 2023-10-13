function solution(a, b, flag) {
    var answer = 0;
    {
        flag ? (answer = a + b) : (answer = a - b);
    }
    return answer;
}

console.log(solution(-4, 7, true));

// P181933: flag에 따라 다른 값 반환하기
