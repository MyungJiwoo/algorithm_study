function solution(a, b) {
  var answer = 0;

  if (a == b) return a;
  else if (a > b) {
    let temp = a;
    a = b;
    b = temp;
  }

  for (a; a <= b; a++) {
    answer += a;
  }

  return answer;
}

console.log(solution(3, 5));
console.log(solution(3, 3));

// P12912 : 두 정수 사이의 합
