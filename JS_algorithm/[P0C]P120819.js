function solution(money) {
    let answer = [];
    answer[0] = Math.floor(money / 5500);
    answer[1] = Math.floor(money % 5500);
    return answer;
}

console.log(solution(15000));

// P120819: 아이스 아메리카노
// 아이스 아메리카노 한 잔에 5500원
