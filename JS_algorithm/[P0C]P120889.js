function solution(sides) {
    var answer = 0;
    sides = sides.sort(function (comp1, comp2) {
        return comp2 - comp1;
    });
    {
        sides[0] < sides[1] + sides[2] ? (answer = 1) : (answer = 2);
    }
    console.log(sides);
    return answer;
}

// [P0C] P120889: 삼각형의 완성조건(1)
