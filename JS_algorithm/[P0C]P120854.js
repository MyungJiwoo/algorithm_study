function solution(strlist) {
    let answer = [];

    for (let s of strlist) {
        answer.push(s.length);
    }

    return answer;
}

console.log(solution(["We", "are", "the", "world!"]));

// P120854: 배열 원소의 길이
