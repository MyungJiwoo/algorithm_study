// P42583 : 다리를 지나는 트럭
// 모든 트럭이 다리를 건너려면 몇 초가 걸리는지?
// 트럭의 무게는 [7, 4, 5, 6]이고 2대까지, 최대 무게는 10이라면
// 0초에는 아무 차도 없고
// 1초에는 7이 출발해서 건너는데 2초걸림 (길이가 2니까)
// 2초에는 7이 끝부분 정도, 이미 7이라서 4가 같이 지날 수 없음
// 3초에는 4가 출발, 7은 다리 도착
// 4초에는 5 출발, 4는 지나고 있음 (2)
// 5초에는 4 도착, 5 지나는 중 (2), 6은 못 올라옴 (10이 넘어서)
// 6초에는 5 도착, 6은 올라옴
// 7초에는 6 지나는 중 (2)
// 8초에는 6 도착
// => 따라서 8초 걸림
// 다리 길이가 100, 최대 무게 100, 트럭 무게 10
// 0초에는 아무것도 없음
// 1초에 10 트럭 출발
// 100초간 지남
// 101초에 도착
// => 따라서 101초 걸림

// 그러면 초는 지나고 있어야 하고
// 각 트럭마다 다리의 길이만큼 카운트 해야하고

// 연결리스트 사용하기 위해 node 필요
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// 큐 선언
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
}

// 상속을 위해 prototype을 사용
Queue.prototype.enqueue = function (newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
        this.head = this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.size += 1;
};

Queue.prototype.dequeue = function () {
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
};

Queue.prototype.peek = function () {
    return this.head.value;
};

Queue.prototype.getSize = function () {
    return this.size;
};

// 큐 확인하기
Queue.prototype.printQueue = function () {
    let current = this.head;
    const queueValues = [];

    while (current) {
        queueValues.push(current.value);
        current = current.next;
    }
};

function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let truck_weight = 0;

    // 현재 다리를 건너고 있는 트럭
    const queue = new Queue();

    for (let i = 0; i < truck_weights.length; i++) {
        while (true) {
            // queue.printQueue();
            // 현재 다리를 건너는 트럭이 아무것도 없다면?
            if (queue.getSize() == 0) {
                queue.enqueue(truck_weights[i]);
                truck_weight += truck_weights[i];
                time++;
                break;
            }
            // 현재 다리위가 꽉 차있다면?
            else if (queue.getSize() == bridge_length) {
                truck_weight -= queue.dequeue();
            }
            // 현재 다리 위가 꽉 차지 않았고 더 건널 수 있다면?
            else {
                // 다음 트럭의 무게와 현재 무게를 더했을 때 최대 무게를 넘지 않으면 다리 위에 올림
                if (weight >= truck_weight + truck_weights[i]) {
                    queue.enqueue(truck_weights[i]);
                    truck_weight += truck_weights[i];
                    time++;
                    break;
                } else {
                    queue.enqueue(0);
                    time++;
                }
            }
        }
    }

    return time + bridge_length;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
