function solution(n) {
    const answer = [];

    for (let i = 1; i <= n; i++) {
        if (i % 2 == 1) answer.push(i);
    }

    return answer;
}

console.log(solution(10));

// * P120813: 짝수는 싫어요
// n 이하의 홀수가 오름차순으로 담긴 배열을 return
