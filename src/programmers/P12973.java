package programmers;

import java.util.Stack;
import java.util.regex.Pattern;

public class P12973 {

    public static void main(String[] args) {
        String s = "baabaa";
        int answer = 0;

        // 스택 사용하기
        Stack<Character> stack = new Stack<>();
        for(int i=0; i<s.length(); i++){
            char word = s.charAt(i);

            if(stack.empty()) stack.push(word);
            else if (stack.peek() == word) {
                stack.pop();
            }
            else {
                stack.push(word);
            }

        }
        answer = (stack.isEmpty()) ? 1 : 0;
        System.out.println(answer);

    }
}

// P12973: 짝지어 제거하기

// 전역변수로 str 하나 만들기 (s와 같은 것)
// find 메소드 : 처음으로 중복하는 글자를 찾아 삭제하고 true를 리턴 (끝까지 돌아도 겹치는 게 없다면 false를 리턴)
// find 메소드가 false를 리턴할 때까지 while문 반복하며 str 편집
// str의 길이가 0이 되도록 true이면 1을 출력
// find가 false를 리턴하는 순간 0을 출력