function solution(array, commands) {
    const answer = [];

    for (let i = 0; i < commands.length; i++) {
        let sliceArray = [];
        sliceArray = array.slice(commands[i][0] - 1, commands[i][1]);

        sliceArray.sort((a, b) => a - b);

        answer.push(sliceArray[commands[i][2] - 1]);
    }

    return answer;
}

console.log(
    solution(
        [1, 5, 2, 6, 3, 7, 4],
        [
            [2, 5, 3],
            [4, 4, 1],
            [1, 7, 3],
        ]
    )
);

// [정렬] P42748 : K번째 수
// i번째 숫자부터 j번째 숫자까지 자르고, k번째의 수는?
