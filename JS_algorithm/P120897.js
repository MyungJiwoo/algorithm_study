function solution(n) {
    let result = [];
    let index = 1;
    while (index <= n / 2) {
        if (n % index === 0) result.push(index);
        index++;
    }
    result = [...result, n];

    return result;
}

console.log(solution(24));
