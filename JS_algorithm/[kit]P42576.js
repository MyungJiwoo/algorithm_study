function solution(participant, completion) {
    let answer = "";

    const finish = {};

    // 동명이인이 있을 수 있기 때문에 t/f이 아닌 number로 계산
    for (let i = 0; i < participant.length; i++) {
        if (finish[participant[i]] == undefined) finish[participant[i]] = 0;
        finish[participant[i]]++;
    }

    // 완주했다면 -1
    for (let i = 0; i < completion.length; i++) {
        finish[completion[i]]--;
    }

    // 완주 == 0, 완주 못함 > 0
    for (let i = 0; i < participant.length; i++) {
        if (finish[participant[i]] > 0) answer = participant[i];
    }

    return answer;
}

console.log(
    solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);

// P42576: 완주하지 못한 선수
