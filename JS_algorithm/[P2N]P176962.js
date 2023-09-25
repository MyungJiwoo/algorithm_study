class Stack {
    constructor() {
        this._arr = [];
    }
    push(item) {
        this._arr.push(item);
    }
    pop() {
        return this._arr.pop();
    }
    peek() {
        return this._arr[this._arr.length - 1];
    }
    length() {
        return this._arr.length;
    }
}

// 문제 풀이
function solution(plans) {
    let answer = [];

    let plansToObject = [];

    // 오브젝트로 변환
    for (let i = 0; i < plans.length; i++) {
        let plan = {};
        let startTime = plans[i][1].split(":");

        plan.name = plans[i][0];
        plan.start = Number(startTime[0]) * 60 + Number(startTime[1]);
        plan.end = Number(plans[i][2]);

        plansToObject.push(plan);
    }

    // 시간순으로 정렬
    plansToObject = plansToObject.sort((a, b) => a.start - b.start);

    // 스택으로 변환
    const plansToStack = new Stack();
    plansToObject.map((item) => plansToStack.push(item));

    // 과제 시작
    let time = plansToObject[0].start;

    while (plansToStack.length() > 1) {
        let work = plansToStack.pop();

        if (time + work.end < plansToStack.peek().start) {
            console.log("과제를 끝낼 수 있음" + plansToStack.peek().name);
            time += work.end;
        } else {
            console.log("과제를 끝낼 수 없음" + plansToStack.peek().name);
            time = plansToStack.peek().start;
            work.end = time + work.end - plansToStack.peek().start;
            plansToStack.push(work);
        }
    }

    return answer;
}

console.log(
    solution([
        ["science", "12:40", "50"],
        ["music", "12:20", "40"],
        ["history", "14:00", "30"],
        ["computer", "12:30", "100"],
    ])
);

// P176962: 과제 진행하기

// [과제이름, 과제시작시간, 과제에걸리는시간]
// 1. 배열을 시간순으로 정렬하기 (2번째 파라미터 기준)
// 2. 시간이 흘러가는 변수 (1분 기준으로 카운트하면 1440이 max)
// 3. 스택을 사용

// 10:25
// 10*60 = 60
// + 25
// 85

// [
//     { name: 'music', start: 740, end: 40 },
//     { name: 'computer', start: 750, end: 100 },
//     { name: 'science', start: 760, end: 50 },
//     { name: 'history', start: 840, end: 30 }
//   ]
