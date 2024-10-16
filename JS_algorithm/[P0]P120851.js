function solution(my_string) {
    let answer = 0;
    for (let i in my_string) {
        if (!isNaN(my_string[i])) answer += +my_string[i];
    }
    return answer;
}

console.log(solution("aAb1B2cC34oOp"));
// * P120851: 숨어있는 숫자의 덧셈 (1)
// my_string안의 모든 자연수들의 합을 return
