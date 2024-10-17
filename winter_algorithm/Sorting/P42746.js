// function solution(numbers) {}
// console.log(solution([3, 30, 34, 5, 9]));

// 방법 2 : forEach()
// function permutation(arr, num) {
//     const results = [];

//     if (num == 1) {
//         return arr.map((value) => [value]);
//     }

//     arr.forEach((fixed, index, origin) => {
//         const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // 해당하는 fixed를 제외한 나머지 배열
//         const permutations = permutation(rest, num - 1); // 나머지에 대해 순열을 구한다.
//         const attached = permutations.map((permutation) => [
//             fixed,
//             ...permutation,
//         ]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
//         results.push(...attached); // 배열 spread syntax 로 모두다 push
//     });
//     return results; // 결과 담긴 results return
// }

// function solution(numbers) {
//     const words = [];

//     const result = permutation(numbers, numbers.length);
//     console.log(result);

//     result.map((r) => {
//         let word = r.join("");
//         words.push(Number(word));
//     });

//     words.sort((a, b) => a - b);

//     return words.pop() + "";
// }

// console.log(solution([6, 10, 2]));

// 방법 1 : 재귀함수
const words = [];

function permutation(arr, s, r) {
    if (s == r) {
        // 단어 만들어서 더하기
        // let word = "";
        // for (let i = 0; i < arr.length; i++) {
        //     word += arr[i];
        // }
        // words.push(Number(word));
        words.push(arr.join(""));
        return;
    }
    for (let i = s; i < arr.length; i++) {
        [arr[s], arr[i]] = [arr[i], arr[s]]; // 자리 변경
        permutation(arr, s + 1, r); // 재귀 (배열 원소의 순열)
        [arr[s], arr[i]] = [arr[i], arr[s]]; // 원상복귀
    }
}

function solution(numbers) {
    var answer = "";

    // numbers를 이어붙여 만들 수 있는 경우의 수들을 어떻게 구현할까? => 재귀함수의 순열
    permutation(numbers, 0, numbers.length);
    console.log(words);

    if (words.length === 0) {
        return ""; // 배열이 비어있을 경우 빈 문자열 반환 또는 다른 적절한 처리 수행
    }

    words.sort((a, b) => a - b);
    console.log(words);

    return words.pop() + "";
}

console.log(solution([6, 10, 2]));

// [정렬] P42746: 가장 큰 수
