function solution(array) {
    array = array.sort((a, b) => a - b);
    return array[Math.floor(array.length / 2)];
}

// [P0C] P120811 : 중앙값 구하기
