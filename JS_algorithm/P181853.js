/*
P181853: 뒤에서 5등까지

정수로 이루어진 리스트 num_list가 주어집니다. 
num_list에서 가장 작은 5개의 수를 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.
*/

function solution(num_list) {
    return num_list.sort((a, b) => a - b).slice(0, 5);
}

console.log(solution([12, 4, 15, 46, 38, 1, 14]));

/*
위 코드는 간결하긴 하지만 모든 원소를 정렬해야 하기 때문에 원소 수가 늘어나면 비효율적이다.

function solution(num_list) {
    const minHeap = [];
    
    for (let num of num_list) {
        minHeap.push(num);
        minHeap.sort((a, b) => a - b); // 힙 유지
        if (minHeap.length > 5) {
            minHeap.pop(); // 가장 큰 값 제거
        }
    }
    
    return minHeap.sort((a, b) => a - b);
}

이렇게 우선순위 힙을 사용하면 효율적으로 구할 수 있다.
*/
