// P12906: 같은 숫자는 싫어

function solution(arr) {
    const stack = [];

    arr.map((i) => {
        if (stack[stack.length - 1] != i) {
            stack.push(i);
        }
    });

    return stack;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
