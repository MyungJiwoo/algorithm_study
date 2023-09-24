let answer = 0;

// 괄호 확인하는 함수
function bracket(s) {
    let sArr = s.split("");
    let bracketStack = []; // stack (Last In First Out)

    for (let i = 0; i < s.length; i++) {
        // stack에 가장 마지막에 들어간 괄호와, 현재 괄호의 짝이 맞다면 shift() : 맨 앞 삭제
        if (
            (bracketStack[0] === "(" && sArr[i] === ")") ||
            (bracketStack[0] === "{" && sArr[i] === "}") ||
            (bracketStack[0] === "[" && sArr[i] === "]")
        ) {
            bracketStack.shift();
        }
        // stack unshift() : 맨 앞에 추가
        else bracketStack.unshift(sArr[i]);
    }

    if (bracketStack.length == 0) return true;
    else return false;
}

function solution(s) {
    // 주어진 s의 길이만큼 반복
    for (let i = 0; i < s.length; i++) {
        // 올바른 괄호인지 확인하기
        {
            bracket(s) ? answer++ : "";
        }

        // 괄호 회전
        let first = s.slice(0, 1);
        s = s.slice(1) + first;
    }

    return answer;
}

console.log(solution("[]{}()"));

// P76502: 괄호 회전하기
