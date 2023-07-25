function solution(seoul) {
    var answer = 0;

    for (let i = 0; i < seoul.length; i++) {
        if (seoul[i].includes("Kim")) answer = i;
    }
    return `김서방은 ${answer}에 있다`;
}

console.log(solution(["Jane", "Kim"]));

// P12919: 서울에서 김서방 찾기
