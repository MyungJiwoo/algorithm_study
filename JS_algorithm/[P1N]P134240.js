function solution(food) {
    let answer = [];

    // food 배열을 거꾸로 순회하며 먹을 수 있는 양을 answer 배열의 앞과 뒤에 추가
    for (let i = food.length - 1; i > 0; i--) {
        for (let j = 0; j < Math.floor(food[i] / 2); j++) {
            // 먹을 수 있는 양만큼만 추가
            answer.push(i); // 맨 뒤에 추가
            answer.unshift(i); // 맨 앞에 추가
        }
    }

    // 문자열 중간에 물 추가
    answer.splice(answer.length / 2, 0, 0);

    // 배열을 문자열로 변환
    answer = answer.join("");
    return answer;
}

console.log(solution([1, 3, 4, 6])); // "1223330333221"

// P134240: 푸드 파이트 대회

// food[0] => 항상 물이며 1개
// food[i] => 준비된 i 칼로리의 음식 개수 (가운데 물을 기준으로 대칭이 되는 양을 준비해야 함)
