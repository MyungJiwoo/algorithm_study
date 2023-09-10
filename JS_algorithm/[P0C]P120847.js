function solution(numbers) {
    numbers.sort(function compare(a, b) {
        return a - b;
    });

    return numbers.pop() * numbers.pop();
}

console.log(solution([0, 31, 24, 10, 1, 9]));

// P120847: 최댓값 만들기(1)
