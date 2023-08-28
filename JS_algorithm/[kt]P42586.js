function solution(progresses, speeds) {
    var answer = [];

    let deploy = [];
    for (let i = 0; i < progresses.length; i++) {
        deploy[i] = 100 - progresses[i];
        deploy[i] = Math.ceil(deploy[i] / speeds[i]);
    }

    let d = deploy.shift();
    let count = 1;
    while (deploy.length > 0) {
        let d2 = deploy[0];

        if (d >= d2) {
            count++;
            deploy.shift();
        } else {
            answer.push(count);
            d = deploy.shift();
            count = 1;
        }
    }
    answer.push(count);

    return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

// [kit] P42586
// 스택/큐로 가까운 곳에 있는 작은 수, 큰 수 찾기
