// P42839: 소수 찾기

function solution(numbers) {
    var answer = 0;

    // 완전탐색 (모든 조합 구하기)
    let set = new Set();
    numOfCase(numbers, "");
    function numOfCase(arr, str) {
        if (arr.length) {
            for (let i = 0; i < arr.length; i++) {
                let copy = [...arr];
                copy.splice(i, 1);
                numOfCase(copy, str + arr[i]);
            }
        }
        if (str > 0) set.add(Number(str));
    }
    console.log(Array.from(set));

    // 에라토스테네스의 체
    function getResult(n) {
        // 1은 소수가 아니다.
        if (n == 1) return false;
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

    Array.from(set).map((value) => {
        if (getResult(value)) {
            console.log(value);
            answer++;
        }
    });

    return answer;
}

console.log(solution("17"));
