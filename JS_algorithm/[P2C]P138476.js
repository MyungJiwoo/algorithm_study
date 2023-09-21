function solution(k, tangerine) {
    var answer = 0;

    const countBox = new Map();
    for (let i = 0; i < tangerine.length; i++) {
        if (countBox.get(tangerine[i]) == undefined)
            countBox.set(tangerine[i], 0);
        countBox.set(tangerine[i], countBox.get(tangerine[i]) + 1);
    }

    // Map의 value를 기준으로 내림차순 정렬 (배열로 변환하여 정렬)
    const sortCountBox = new Map(
        Array.from(countBox).sort((a, b) => b[1] - a[1])
    );

    let box = 0;
    for (let value of sortCountBox.values()) {
        // 가장 많은 한가지 사이로 k를 충족하는 경우
        box += value;
        answer++;
        if (box >= k) break;
    }

    return answer;
}

console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));

// P138476: 귤 고르기
