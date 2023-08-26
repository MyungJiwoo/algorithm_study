function solution(sizes) {
    var answer = 0;

    // 가로>세로로 종이 정리하기
    sizes.map((size) => {
        if (size[0] < size[1]) [size[0], size[1]] = [size[1], size[0]];
    });

    // 가로 기준 내림차순
    sizes.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        } else {
            return b[0] - a[0];
        }
    });
    let widthMax = sizes[0][0];
    console.log(widthMax);

    // 세로 기준 내림차순
    sizes.sort((a, b) => {
        if (a[1] === b[1]) {
            return b[0] - a[0];
        } else {
            return b[1] - a[1];
        }
    });
    let heightMax = sizes[0][1];
    console.log(heightMax);

    console.log(sizes);

    return widthMax * heightMax;
}

console.log(
    solution([
        [14, 4],
        [19, 6],
        [6, 16],
        [18, 7],
        [7, 11],
    ])
);

// [완전탐색] P86491: 최소 직사각형
// 우선 가로, 세로의 max를 찾고
// 세로 중 가장 큰 수를 뒤집어서 확인
