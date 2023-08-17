function solution(phone_number) {
    return phone_number.replace(
        phone_number.substring(0, phone_number.length - 4),
        "*".repeat(phone_number.length - 4)
    );
}

console.log(solution("01033334444"));

// P12948: 핸드폰 번호 가리기
