function solution(a, b) {
    let answer = 0;

    ab = String(a) + String(b);
    ba = String(b) + String(a);

    {
        Number(ab) >= Number(ba) ? (answer = ab) : (answer = ba);
    }
    return Number(answer);
}

console.log(solution(9, 91));

// P181939: 더 크게 합치기
