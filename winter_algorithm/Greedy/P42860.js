// P42860 : 조이스틱
/*
    디폴트는 a

    ▲ - 다음 알파벳
    ▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
    ◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
    ▶ - 커서를 오른쪽으로 이동 (마지막 위치에서 오른쪽으로 이동하면 첫 번째 문자에 커서)
*/

/*
    내 생각...
    중간 이상부터는 마지막으로 가서 알파벳 조절하는게 좋음
    두번째 문자가 a인 경우에는 뒤로 돌아가서 하는게 좋음
    시작이 a라면 맨 뒤로
*/

function solution(name) {
    var answer = -1;

    let index = -1;
    for (let i = 0; i < name.length; i++) {
        // if (name[1] === "A" && index == 1) {
        //     index = name.length - 1;
        // } else if (name[1] === "A" && index > 1) {
        //     index--;
        //     answer++;
        // } else {
        //     index++;
        //     answer++;
        // }

        if (name[1] === "A" && index == 1) {
            index = name.length - 1;
        } else if (name[0] === "A" && index == 0) {
            index = name.length - 1;
        } else if ((name[0] === "A" || name[1] === "A") && index > 1) {
            index--;
            answer++;
        } else {
            index++;
            answer++;
        }

        // 두번째 순서가 a인 경우에만 인덱스 뒤로가게끔 조절하면 될것같은데...
        let name_alphabet = name.charCodeAt(index);
        let alphabet = 65;

        console.log("현재 맞춰야 할 알파벳 : " + name[index]);

        if (name_alphabet < 78) {
            console.log("m 이하");
            while (alphabet < name_alphabet) {
                alphabet++;
                answer++;
            }
            console.log(`중간점검: ${answer}`);
        } else {
            console.log("n 이상");
            answer++;
            alphabet = 90;
            while (alphabet > name_alphabet) {
                alphabet--;
                answer++;
            }
            console.log(`중간점검: ${answer}`);
        }
    }

    return answer;
}

/*
    ABB
    1+1+1+1
*/

console.log(solution("AEEEN"));

/*
j|aaaaa : 9 *
ja|aaaa : 10
je|aaaa : 14 *
jea|aaa : 15
jez|aaa : 16
jer|aaa : 24 *
jera|aa : 25
jerz|aa : 26
jero|aa : 37 *
jeroa|a : 38
jeroe|a : 42 *
jeroea| : 43
jeroez| : 44
jeroen| : 56 *


a 1(65)
b 2(66)
c 3(67)
d 4(68)
e 5(69)
f 6(70)
g 7(71)
h 8(72)
i 9(73)
j 10(74)
k 11(75)
l 12(76)
m 13(77)
--
n 14(78)
o 15(79)
p 16(80)
q 17(81)
r 18(82)
s 19(83)
t 20(84)
u 21(85)
v 22(86)
w 23(87)
x 24(88)
y 25(89)
z 26(90)

j|aa : 9
jaa| : 10
jaz| : 11
jan| : 23
*/
