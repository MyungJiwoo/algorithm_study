function solution(babbling) {
    let answer = 0;

    for (let i = 0; i < babbling.length; i++) {
        // 정규식을 사용해 같은 글자가 바로 연속되지 않는지 확인
        if (!babbling[i].match(/(aya|ye|woo|ma)\1+/)) {
            // 정규식을 사용해 babbling에 해당하는 단어는 한번에 ""로 치환
            babbling[i] = babbling[i].replace(/aya|ye|woo|ma/g, "");
        }

        // 주어진 단어를 말할 수 있다면 길이가 0
        if (babbling[i].length == 0) answer++;
    }

    return answer;
}

console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]));

// P133499: 옹알이 (2)

// babbling이 포함되어 있는지, 있다면 ""로 치환하는 정규식+replace
// babbling[i] = babbling[i].replace(/aya|ye|woo|ma/g, "");
