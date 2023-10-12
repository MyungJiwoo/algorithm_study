function solution(num_list) {
    let multi = 0;
    let sum = 0;

    multi = num_list.reduce((acc, cur) => {
        return acc * cur;
    });

    sum =
        num_list.reduce((acc, cur) => {
            return acc + cur;
        }) ** 2;

    return sum > multi ? 1 : 0;
}

console.log(solution([3, 4, 5, 2, 1]));

// P181929: 원소들의 곱과 합
