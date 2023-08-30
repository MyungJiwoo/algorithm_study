function solution(arr) {
    let answer = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let gcdNum = gcd(answer, arr[i]);
        answer = (arr[i] * answer) / gcdNum;
    }

    return answer;
}

// 두 수의 최대공약수 구하는 재귀함수 gcd
let gcd = (a, b) => {
    let g = a % b;
    if (g == 0) return b;
    else {
        a = b;
        b = g;
    }
    return gcd(a, b);
};

console.log(solution([2, 6, 8, 14]));

// P12953: N개의 최소공배수

/*
    <유클리드 알고리즘>
    - 두 수 기준으로, (두 수의 곱) / (두 수의 최대공약수) = (두 수의 최소공배수)
    - n개의 수가 있다면, 첫 두 수의 최소공배수를 구하고, 구한 최소공배수에 다음 원소와의 최소공배수를 다시 구하는 방식으로 진행
*/
