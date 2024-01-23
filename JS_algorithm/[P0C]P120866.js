function warning(board, boom_i_array, boom_j_array) {
    for (let boom_i of boom_i_array) {
        for (let boom_j of boom_j_array) {
            if (boom_i - 1 >= 0) {
                if (!boom_j - 1) board[boom_i - 1][boom_j - 1] = 1;
                board[boom_i - 1][boom_j] = 1;
                if (!boom_j + 1) board[boom_i - 1][boom_j + 1] = 1;
            }

            if (!boom_j - 1) board[boom_i][boom_j - 1] = 1;
            if (!boom_j + 1) board[boom_i][boom_j + 1] = 1;

            if (boom_i + 1 < board.length) {
                if (!boom_j - 1) board[boom_i + 1][boom_j - 1] = 1;
                board[boom_i + 1][boom_j] = 1;
                if (!boom_j + 1) board[boom_i + 1][boom_j + 1] = 1;
            }
        }
    }
}

function solution(board) {
    var answer = 0;

    let boom_i = [];
    let boom_j = [];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j]) {
                boom_i.push(i);
                boom_j.push(j);
            }
        }
    }

    warning(board, boom_i, boom_j);

    console.log(board);

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (!board[i][j]) {
                answer++;
            }
        }
    }

    return answer;
}

console.log(
    solution([
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0],
    ])
);

// [P0C] P120866 : 안전지대

/*

1) board[i-1][j-1]
2) board[i-1][j]
3) board[i-1][j+1]
4) board[i][j-1]
- 지뢰 : board[i][j]
5) board[i][j+1]
6) board[i+1][j-1]
7) board[i+1][j]
8) board[i+1][j+1]

==> 이거를 다 1로 만들어주면 됨


*/
