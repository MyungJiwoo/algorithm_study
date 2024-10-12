function solution(keyinput, board) {
    const coord = [0, 0];
    const coord_x = Math.floor(board[0] / 2);
    const coord_y = Math.floor(board[1] / 2);

    for (let keyboard of keyinput) {
        if (keyboard[0] == "r" && coord[0] < coord_x) coord[0]++;
        else if (keyboard[0] == "l" && coord[0] > coord_x * -1) coord[0]--;
        else if (keyboard[0] == "u" && coord[1] < coord_y) coord[1]++;
        else if (keyboard[0] == "d" && coord[1] > coord_y * -1) coord[1]--;
    }

    return coord;
}

console.log(solution(["down", "down", "down", "down", "down"], [7, 9]));

// P120861: 캐릭터의 좌표
