function solution(n) {
    let answer = 0;
    let string_n = n + "";
    for (let i of string_n) answer += Number(i);
    return answer;
}

// P120906: 자릿수 더하기
