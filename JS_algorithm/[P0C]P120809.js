function solution(numbers) {
    var answer = [];
    for (let i = 0; i < numbers.length; i++) {
        answer.push(numbers[i] * 2);
    }
    return answer;
}

console.log(solution([1, 2, 3, 4, 5]));

// P120819: 배열 두 배 만들기
