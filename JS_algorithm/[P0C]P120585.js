function solution(array, height) {
    var answer = 0;
    array = array.sort((a, b) => b - a);

    let i = 0;
    while (array[i] > height) {
        answer = ++i;
    }

    return answer;
}

// [P0C] P120585 : 머쓱이보다 키 큰 사람
