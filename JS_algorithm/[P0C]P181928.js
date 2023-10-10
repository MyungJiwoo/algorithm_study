function solution(num_list) {
    let odd = "";
    let even = "";
    for (let n of num_list) {
        {
            n % 2 == 0 ? (even += n) : (odd += n);
        }
    }
    return Number(odd) + Number(even);
}

console.log(solution([3, 4, 5, 2, 1]));

// P181928 : 이어 붙인 수
