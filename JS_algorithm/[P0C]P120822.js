function solution(my_string) {
    return my_string.split("").reverse().join("");
}

// split(""): 문자열을 하나씩 쪼개 배열에 넣음
// reverse(): 배열 뒤집기
// join(): 하나의 문자열로 합침

console.log(solution("jaron"));

// P120822: 문자열 뒤집기
