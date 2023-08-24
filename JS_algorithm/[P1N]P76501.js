function solution(absolutes, signs) {
    let answer = 0;

    for (let i = 0; i < absolutes.length; i++) {
        {
            signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
        }
    }

    return answer;
}

console.log(solution([4, 7, 12], [true, false, true]));

// P76501: 음양 더하기
// true == 양수, false == 음수
