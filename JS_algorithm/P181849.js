/*
P181849: 문자열 정수의 합

한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.
*/

function solution(num_str) {
    return [...num_str].reduce((arr, current) => arr + parseInt(current), 0);
}

console.log(solution("123456789"));
