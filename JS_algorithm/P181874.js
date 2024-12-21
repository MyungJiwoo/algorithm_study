// P181874
// "a"가 등장하면 전부 "A"로 변환하고, "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환

function solution(myString) {
    let answer = "";

    myString.split("").map((letter) => {
        if (letter === "a" || letter === "A") answer += "A";
        else answer += letter.toLowerCase();
    });

    return answer;
}

console.log(solution("abstract Algebra"));
