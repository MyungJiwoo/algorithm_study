package programmers;

import java.util.*;

public class P12909 {

	public static void main(String[] args) {
		String s = "(())())";
		
		Stack<Character> stack = new Stack<>();
		
		for(int i=0; i<s.length(); i++) {
			char str = s.charAt(i);
			if(str == '(') {
				stack.push(str);
			}
			else if(str == ')') {
				if(!stack.isEmpty()) stack.pop();
				else stack.push(str);
			}
		}
		
		boolean answer = (stack.isEmpty()) ? true : false;
		
		System.out.println(answer);
	}

}

// 올바른 괄호
// 괄호가 바르게 짝지어졌다는 것은 ()의 순서
// (또는 )로만 이루어진 문자열이 주어졌을 때, 문자열 s가 올바른 괄호이면 true / 아니면 false