// P42840: 모의고사

const grading = (answers, student) => {
    let student_index = 0;
    let score = 0;
    answers.map((a) => {
        if (student_index >= student.length) student_index = 0;
        if (a === student[student_index]) score++;
        student_index++;
    });
    return score;
};

function solution(answers) {
    var answer = [];
    const student1 = [1, 2, 3, 4, 5];
    const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    const scores = [];
    scores.push(grading(answers, student1));
    scores.push(grading(answers, student2));
    scores.push(grading(answers, student3));

    // 배열이라 ... 붙여야함
    let max = Math.max(...scores);
    scores.map((s, index) => {
        if (s === max) answer.push(index + 1);
    });

    return answer;
}

console.log(solution([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
