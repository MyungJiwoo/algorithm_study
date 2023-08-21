// 지금 해보면 별거 아닌데 너무 헤매서 인터넷 보고 함,,,ㅠㅠ

function solution(ingredient) {
    let answer = 0;

    let hambugar = [];

    for (let i of ingredient) {
        hambugar.push(i);

        if (hambugar.length >= 4 && hambugar.slice(-4).join("") == "1231") {
            hambugar.pop();
            hambugar.pop();
            hambugar.pop();
            hambugar.pop();

            answer++;
        }
    }

    return answer;
}

console.log("답은 ===> " + solution([2, 1, 1, 2, 3, 1, 2, 3, 1]));
// 1 2

// P133502: 햄버거 만들기
// 1 빵, 2 야채, 3 고기 => 1231 햄버거

/* 
function solution(ingredient) {
    let answer = 0;
    ingredient = ingredient.join("");

    while (ingredient.includes("1231")) {
        ingredient = ingredient.replace("1231", "");
        answer++;
    }

    return answer;
}
*/
