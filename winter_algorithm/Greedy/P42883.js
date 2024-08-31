// P42883 : 큰 수 만들기
// 주어진 숫자 문자열에서

/*
그리디
- 문제 한 단계마다 최적의 선택을 한다!
*/

/*
    처음으로 시도했던 방법은 최솟값을 구하고 자리에 맞게 하나씩 지운거였다.
    근데 그러면 최소만 지웠을때 나오는 경우의 수에서 맨 앞에 중간 크기의 숫자가 나올 수 있어서,,
    그래서 다음 방법으로는 지우려고하는 차례의 숫자 다음에 더 큰 숫자가 있다면 지우는 방법을 택해야 할 것 같다.

    이것도 아니야........ 3번째 예시에서 막혀

    4 넣고 1은 최소니까 빼고 7을 넣어 그리고 그 다음또 7을 넣어 그리고 2를 넣어 5을 넣어 
*/

// function solution(number, k) {
//     let answer = number.split("");
//     console.log(answer);

//     // 최솟값을 구한다.
//     let min_array = number.split("").sort();

//     // split된 배열에서 최솟값을 하나씩 지운다.
//     let minus = 0;
//     while (minus < k) {
//         minus++;

//         let min = min_array.shift();
//         let index = answer.indexOf(min);
//         console.log("현재 최소 : " + min);
//         console.log("찾은 인덱스 : " + index);

//         answer.splice(index, 1);
//         console.log(answer);
//     }
//     return answer.join("");
// }

// function solution(number, k) {
//     let answer = number.split("");
//     number = number.split("");

//     let minus = 0;
//     while (minus < k) {
//         minus++;
//         let compare = number.shift();
//         console.log("현재 비교 숫자 " + compare);

//         const compare_boolean = answer.some((value) => {
//             return value > compare;
//         });

//         console.log(compare_boolean);
//     }

//     return answer;
// }

/*
    이전에 내가 쓴 방법은 주어진 문자열의 순서는 그대로 한 문자씩 돌면서 그 다음에 현재 숫자보다 큰 숫자가 있는지 비교하는 방식이었다.
    하지만 이 방법으로는 어림도 없었고.. 
    최대 숫자만 골라서 남기기? 최소 숫자만 골라서 삭제하기?
    다 예제 3번에서는 막혔다..^^
    결국 하나씩 모든 경우의 수를 내야 하나? 싶었는데 그렇게 되면 삭제하는 숫자가 많아질수록 계산이 늘어나서 시간초과가 날게 분명했다. 
    암튼 며칠을 고민하다가 결국 인터넷의 힘을 빌렸고,,, 

    한 줄씩 뜯어서 이해하는 걸로 공부하려고 한다. 하하
*/
function solution(number, k) {
    // 스택을 사용해 최댓값에 들어갈 숫자를 빼고 더하면서 계산한다.
    // => 즉, 나는 기존 number에서 필요없는 숫자를 빼는 방식으로 접근했었고, 이 방식은 number 숫자를 기반으로 새로운 스택을 사용해 큰 수를 만들어간다.
    let stack = [];

    // 주어진 number는 하나씩 순회한다.
    for (let i = 0; i < number.length; i++) {
        // 현재 검사할 숫자 하나를 뺀다.
        let current = number[i];

        // while문 검사 조건
        // 1. 제거해야 할 숫자 개수가 남았을 때
        // 2. 스택이 비어있지 않을 때
        // 3. 스택의 마지막 숫자가 현재 숫자보다 작을 때
        // => 현재 숫자가 스택의 마지막 숫자보다 크다면 스택의 마지막 숫자를 삭제한다!
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] < current) {
            stack.pop();
            k--;
        }

        // 현재 숫자가 스택의 마지막 숫자보다 작다면 스택의 마지막에 추가된다.
        // 스택의 마지막 숫자보다 큰 숫자가 들어간다면, 그 순간부터는 k(삭제할 개수)를 초과한 것이다.
        stack.push(current);
    }

    // 남은 k가 있다면 뒷자리에서 제거
    // => 뒷자리 숫자가 클수록 큰 수기 때문이다.
    stack.splice(stack.length - k, k);

    // 스택의 모든 숫자를 하나의 문자열로 묶으면 답이 된다.
    const answer = stack.join("");
    return answer;
}

console.log(solution("4177252841", 4));
// 1231234, 3 => 3234
// 4177252841, 4 => 775841 (4 / 1 / 2 / 2 빠짐)

// 4177252841
// 4

/*
[0121]
이전에 시도해봤는데 막혀서 껐다가 계속 생각해봐도 안되겠어서,,,, 답지를 확인하려고 함.
일단 지금까지 했던 방법은, 현재 차례의 숫자 뒤에 더 큰 숫자가 있다면 true를 반환하는 것까지 함.....

*/
