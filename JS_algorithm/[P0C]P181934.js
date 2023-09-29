function solution(ineq, eq, n, m) {
    var answer = 0;
    let sign = ineq + eq;
    if (
        (sign === ">=" && n >= m) ||
        (sign === "<=" && n <= m) ||
        (sign === ">!" && n > m) ||
        (sign === "<!" && n < m)
    )
        answer = 1;
    return answer;
}

console.log(solution("<", "=", 20, 50));

// [P0C] P181934 : 조건 문자열
