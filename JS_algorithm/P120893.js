// * P120893 : 대문자와 소문자

function solution(my_string) {
    let answer = "";
    for (let i in my_string) {
        const charCode = my_string.charCodeAt(i);

        {
            65 <= charCode && charCode <= 90
                ? (answer += String.fromCharCode(charCode + 32))
                : (answer += String.fromCharCode(charCode - 32));
        }
    }
    return answer;
}

console.log(solution("cccCCC"));
