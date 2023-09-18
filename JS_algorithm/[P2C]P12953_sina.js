function solution(arr) {
    let num = 1;

    while (true) {
        // 화살표 함수에서 {}이 있다면 return을 써야하고, {}이 없다면 return 생략가능
        if (arr.every((arrayNum) => num % arrayNum == 0)) {
            break;
        } else {
            num++;
        }
    }

    return num;
}

console.log(solution([2, 6, 8, 14]));

// var objArr = [
//     { name: "철수", age: 10 },
//     { name: "영희", age: 10 },
//     { name: "바둑이", age: 2 },
// ];

// var arrr = [2, 3, 4, 5];

// console.log(objArr.every((item) => item.age > 5)); //false (바둑이 탈락!)
// console.log(objArr.every((item) => item.age > 1)); //true
// console.log(arrr.every((item) => item > 1));
