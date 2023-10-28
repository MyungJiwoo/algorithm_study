function solution(dot) {
    var answer = 0;
    if (isPosNav(dot[0]))
        if (isPosNav(dot[1])) answer = 1;
        else answer = 4;
    else if (isPosNav(dot[1])) answer = 2;
    else answer = 3;
    return answer;
}

isPosNav = (num) => {
    if (num > 0) return true;
    else return false;
};

// P120841: 점의 위치 구하기
