function solution(str1, str2) {
    var answer = 0;
    {
        str1.includes(str2) ? (answer = 1) : (answer = 2);
    }
    return answer;
}

// [P0C] P120908: 문자열안에 문자열
