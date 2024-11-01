// P1845 : 폰켓몬

function solution(nums) {
    let answer = 0;

    // 중복 제거
    const set = new Set(nums);

    // 구해야 하는 포켓몬 수는?
    const count = nums.length / 2;

    // 포켓몬 마리 > 중복제거한 배열의 길이 ==> 3마리 골라야 하는데 종류가 2종류밖에 없다면 어차피 2종류가 최대이다.
    // 포켓몬 마리 <= 중복제거한 배열의 길이 ==> 3마리 골라야 하는데 종류가 5종류라면 어차피 3종류가 최대이다.
    {
        count > set.size ? (answer = set.size) : (answer = count);
    }

    return answer;
}

console.log(solution([3, 3, 3, 2, 2, 2]));
