function solution(num_list) {
    var answer = [0, 0];

    num_list.map((item) => {
        if (item % 2 == 0) answer[0]++;
        else answer[1]++;
    });

    return answer;
}
