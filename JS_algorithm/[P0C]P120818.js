function solution(price) {
    var answer = 0;

    if (price < 100000) {
        answer = price;
    } else if (price >= 100000 && price < 300000) {
        answer = price * 0.95;
    } else if (price >= 300000 && price < 500000) {
        answer = price * 0.9;
    } else {
        answer = price * 0.8;
    }

    return Math.floor(answer);
}

console.log(solution(580000));

// P120818: 옷가게 할인 받기
// 소수점 이하는 버림
