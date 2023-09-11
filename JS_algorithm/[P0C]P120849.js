function solution(my_string) {
    return my_string.replaceAll(/a|e|i|o|u/g, "");
}

console.log(solution("bus"));

// P120849: 모음 제거

/*
[정규식]
슬래쉬(/) 두개 사이에 정규표현식을 넣으면 됨
or: |
g: 글로벌(전역)
*/
