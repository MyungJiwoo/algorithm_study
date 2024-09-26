// P42576: 완주하지 못한 선수

function solution(participant, completion) {
    let answer = "";

    const finish = {};

    for (let i = 0; i < participant.length; i++) {
        if (finish[participant[i]] == undefined) finish[participant[i]] = 0;
        finish[participant[i]]++;
    }

    for (let i = 0; i < completion.length; i++) {
        finish[completion[i]]--;
    }

    for (let i = 0; i < participant.length; i++) {
        if (finish[participant[i]] > 0) answer = participant[i];
    }

    return answer;
}
