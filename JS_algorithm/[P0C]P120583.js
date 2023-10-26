function solution(array, n) {
    var answer = 0;
    for (let a of array) if (a == n) answer++;
    return answer;
}

// [P0C] P120583: 중복된 숫자 개수
