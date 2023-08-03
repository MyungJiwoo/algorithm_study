/* 피보나치 수열로 푼 방법 */
function fibonacci(num) {
    let fibo = [1, 1];

    for (let i = 2; i <= num; i++) {
        let a = fibo[i - 1];
        let b = fibo[i - 2];
        fibo.push((a + b) % 1234567);
    }

    return fibo[num];
}

function solution(n) {
    return fibonacci(n);
}

console.log(solution(2000));

/* P12914: 멀리 뛰기
- 효진이가 할 수 있는 행동 : 1칸 뛰기, 2칸 뛰기
- n은 1이상 2000 이하인 정수 */

/* ------------------------------------------------------------------------- */

/* 같은 것이 있는 순열로 풀은 방법 -> 수가 너무 커져서 나중에는 무한대가 나오기 때문에 풀 수 없다.
function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) result *= i;
    return result;
}

function solution(n) {
    let answer = 0;

    let twoStep = Math.floor(n / 2);
    let oneStep = n % 2;

    let step = [];
    for (let i = 0; i <= Math.floor(n / 2); i++) {
        step.push([twoStep, oneStep]);
        twoStep -= 1;
        oneStep += 2;
    }

    let stepCase = [];
    for (let i = 0; i < step.length; i++) {
        let num1 = factorial(step[i][0] + step[i][1]);
        let num2 = factorial(step[i][0]);
        let num3 = factorial(step[i][1]);

        stepCase.push(num1 / (num2 * num3));
        answer += num1 / (num2 * num3);
    }

    return answer;
}

console.log(solution(2000)); // 144
*/

/* 같은 것이 있는 순열 풀이 예시 [6]
(aaabb라면 a가 3개이고 b가 2개이므로 5! / 3!*2! = 10)
(1과2총개수! / 1개수! * 2개수!)

a. 2가 3개일 때 -> 3! / 3! = 1
2 2 2

b. 2가 2개일 때, 1이 2개일 때  -> 4! / 2!*2! = 24/4 = 6
1 1 2 2
2 1 1 2
2 2 1 1
2 1 2 1
1 2 1 2
1 2 2 1

c. 2가 1개일 때, 1이 4개일 때 -> 5! / 1!*4! = 120/24 = 5
2 1 1 1 1
1 2 1 1 1
1 1 2 1 1
1 1 1 2 1
1 1 1 1 2

d. 1이 6개일 때 -> 6! / 6! = 1
1 1 1 1 1 1
*/
