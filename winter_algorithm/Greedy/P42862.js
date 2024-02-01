// P42862: 체육복
// 체육복은 앞/뒷 사람만 빌려줄 수 있음
// 가장 많이 수업에 참여할 수 있는 사람의 수 구하기

function solution(n, lost, reserve) {
    // 두 배열의 중복 원소 찾기
    let f = reserve.filter((it) => lost.includes(it));

    // 두 배열의 중복 원소만 제거
    f.forEach((e) => {
        reserve = reserve.filter((element) => element !== e);
        lost = lost.filter((element) => element !== e);
    });

    // 정렬 (숫자 기준)
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);

    var answer = 0;
    reserve.forEach((element) => {
        // 자기 자신이 도난당했거나, 앞/뒷 번호 사람만 빌려줄 수 있게 처리
        // 가장 먼저 적은 것대로 우선순위 (빌려줄 수 있는 사람이 앞/뒷 사람 2명인 경우, 앞 사람을 먼저 빌려준다.)
        const found = lost.findIndex(
            (value) =>
                value == element || value == element - 1 || value == element + 1
        );

        if (found > -1) lost.splice(found, 1);
    });

    // 체육복을 빌리지 못한 사람은 배열에 계속 남게되니 그 인원수를 총 인원수에서 빼주면 됨
    answer = n - lost.length;

    return answer;
}

console.log(solution(5, [2, 3, 4], [3, 5]));
// n : 전체 학생 수
// lost : 체육복 잃어버린 사람
// reserve : 여벌옷 있는 사람
// => 일단 여벌옷이랑 비교해서 체육복을 빌린 사람은 lost 배열에서 삭제하고 나중에 n-lost.length
// reserve를 기준으로 lost에 앞뒤에 해당하는 사람이 있는지 찾고, 둘 다 있다면 앞 번호를 지우는 느낌으로? (1이라면 2만)

// 거의 다 왔는데....... 반례가 뭘까
// 반례1) 여벌옷 있는 사람도 도난당할 수 있다.
// 반례2) 인덱스로 계산하기 때문에 정렬되어 있지 않은 경우
// 반례3) 여벌옷 있는 사람이 도난도 당했는데, 이 사람이 빌려줄 수도 있어서 다른 사람을 먼저 빌려준 경우
