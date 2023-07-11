function solution(my_string, overwrite_string, s) {
    let answer =
        my_string.substr(0, s) +
        overwrite_string +
        my_string.substring(s + overwrite_string.length);

    return answer;
}

console.log(solution("He11oWor1d", "lloWorl", 2));

// P181943: 문자열 겹쳐쓰기
// my_string : 원래 문자열
// overwrite_string : 겹쳐쓸 문자열
// s : 겹쳐 쓸 위치
