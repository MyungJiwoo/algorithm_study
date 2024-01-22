// P181873 : 특정한 문자를 대문자로 바꾸기

function solution(my_string, alp) {
    return my_string.replaceAll(alp, alp.toUpperCase());
}

console.log(solution("programmers", "p"));
