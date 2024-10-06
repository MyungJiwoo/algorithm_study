/* P42587 : 프로세스
 아래 규칙에 따라 프로세스를 관리할 경우, 특정 프로세스가 몇 번쨰로 실행되는지 알아내기
 규칙 1) 실행 대기 큐에서 대기중인 프로세스 하나를 꺼냅니다.
 규칙 2) 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
 규칙 3) 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
 규칙 3.1) 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.
*/

/* priorities : 실행 대기 큐에 있는 프로세스의 중요도가 순서대로 담긴 배열 (높을 수록 빨리 실행해야 함)
 location : 몇 번쨰로 실행되는지 알고싶은 프로세스의 위치를 알려주는 매개변수
 => 그렇다면 해당 프로세스가 몇 번쨰로 실행되는지?
 */

/* 문제 풀이 방식
 우선순위 큐를 써야하는건 알았는데 답에서 원하는 우선순위 큐를 구현하기 어려웠다.
 그래서 그냥 최대값과 인덱스로 접근해서 배열을 수정하는 방법으로 구현했다.
 우리는 주어진 우선순위 배열을 프로세스 규칙에 맞게 정렬하기도 해야하지만, 그에 맞은 인덱스도 관리해야 하니 인덱스 배열을 따로 만들었다.
 그리고 모든 배열의 원소를 순회하면서 순간마다 최대값과 그 인덱스 값을 구했다.
 문제는 indexOf() 메소드는 기본적으로 배열 맨 앞에서 원하는 값을 찾아주기 때문에 이전의 최대 인덱스 뒤로 검색하도록 매개변수를 주었다.
 그리고 검색 결과가 없다면 (마지막 최대 인덱스의 앞부분으로 검색 결과가 있다면) -1을 반환하기 때문에, 이때는 맨 앞에서부터 다시 검색하도록 if문을 설정했다.
 이렇게 최대 인덱스를 찾았다면 주어진 location과 삭제할 인덱스가 같다면 정답을 리턴하고,
 만약 원하는 location과 삭제할 원소가 다르다면 마저 삭제를 진행하고 다음 턴으로 진행한다.
*/

// #3. 최대값
function solution(priorities, location) {
    var answer = 0;

    // 인덱스 배열
    const index_array = [];
    for (let i = 0; i < priorities.length; i++) {
        index_array.push(i);
    }

    let max = Math.max(...priorities);
    let max_index = 0;
    while (priorities.length > 0) {
        answer++;

        max = Math.max(...priorities);
        max_index = priorities.indexOf(max, max_index);
        if (max_index == -1) max_index = priorities.indexOf(max);

        if (index_array[max_index] == location) break;

        priorities.splice(max_index, 1);
        index_array.splice(max_index, 1);
    }

    return answer;
}

console.log(solution([9, 9, 1, 0, 2, 5, [1], 0, 3, 1, 1, 3, 2], 6));

// #2. 힙으로 풀기
// class MaxHeapNode {
//     constructor(value, index) {
//         this.value = value;
//         this.index = index;
//         this.next = null;
//     }
// }

// class MaxHeapPriorityQueue {
//     constructor() {
//         this.head = null;
//     }

//     enqueue(value, index) {
//         const newNode = new MaxHeapNode(value, index);

//         if (!this.head || value > this.head.value) {
//             newNode.next = this.head;
//             this.head = newNode;
//         } else {
//             let current = this.head;

//             // 새로운 값을 적절한 위치에 삽입
//             while (current.next && value <= current.next.value) {
//                 current = current.next;
//             }

//             newNode.next = current.next;
//             current.next = newNode;
//         }
//     }

//     dequeue() {
//         if (!this.head) {
//             return null;
//         }

//         const max = this.head.value;
//         this.head = this.head.next;
//         return max;
//     }

//     peek() {
//         return this.head ? this.head.value : null;
//     }

//     size() {
//         let count = 0;
//         let current = this.head;

//         while (current) {
//             count++;
//             current = current.next;
//         }

//         return count;
//     }

//     print() {
//         // console.log(this.head);
//         let current = this.head;
//         // console.log(current);

//         while (current) {
//             console.log(current.index);
//             current = current.next;
//         }
//         // console.log(current);

//         // return current.value;
//     }

//     isEmpty() {
//         return this.head === null;
//     }
// }

// function solution(priorities, location) {
//     var answer = 0;

//     const maxHeapPriorityQueue = new MaxHeapPriorityQueue();
//     priorities.map((i, index) => maxHeapPriorityQueue.enqueue(i, index));
//     console.log(maxHeapPriorityQueue.print());

//     return answer;
// }

// console.log(solution([1, 1, 9, 1, 1, 1], 0));

// #1. 연결 리스트로 푸는 방법 실패
// class Node {
//     constructor(value, priority) {
//         this.value = value;
//         this.priority = priority;
//         this.next = null;
//     }
// }

// // 큐 선언
// class Queue {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }
// }

// // 추가 (우선순위 높은게 선두)
// Queue.prototype.enqueue = function (newValue, priority) {
//     const newNode = new Node(newValue, priority);

//     if (!this.head || priority > this.head.priority) {
//         newNode.next = this.head;
//         this.head = newNode;
//     } else {
//         let current = this.head;

//         // 새로 넣을 우선순위가 더 낮다면
//         while (current.next && priority <= current.next.priority) {
//             current = current.next;
//         }

//         // 새로 넣을 데이터를 선두에 넣음
//         newNode.next = current.next;
//         current.next = newNode;
//     }

//     console.log("-------하나 추가했어요------");
//     this.printQueue();
// };

// // 맨 앞에서 삭제
// Queue.prototype.dequeue = function () {
//     const value = this.head.value;
//     this.head = this.head.next;
//     this.size -= 1;
//     return value;
// };

// Queue.prototype.peek = function () {
//     return this.head.value;
// };

// Queue.prototype.getSize = function () {
//     return this.size;
// };

// // 큐 확인하기
// Queue.prototype.printQueue = function () {
//     let current = this.head;
//     const queueValues = [];

//     while (current) {
//         queueValues.push({ value: current.value, priority: current.priority });
//         current = current.next;
//     }

//     console.log("Priority Queue:", queueValues);
// };

// // 큐에서 원하는 값 찾기
// Queue.prototype.findValue = function (value) {
//     let current = this.head;
//     let index = 0;

//     while (!current.value == value) {
//         index++;
//         current = current.next;
//     }

//     // console.log(index);
//     return index;
// };

// function solution(priorities, location) {
//     var answer = 0;

//     console.log(priorities);
//     const queue = new Queue();
//     priorities.map((i, index) => queue.enqueue(index, i));

//     queue.printQueue();
//     answer = queue.findValue(location);

//     return answer + 1;
// }

// console.log(solution([1, 1, 9, 1, 1, 1], 0));
