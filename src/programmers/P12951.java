package programmers;

public class P12951 {

	public static void main(String[] args) {
		String s = "3people     unFollowed me ";
		String answer = "";

		s = s.substring(0, 1).toUpperCase() + s.substring(1).toLowerCase();
		System.out.println(s);
		
		String[] str = s.split("");
		for(int i=1; i<str.length; i++) {
			if(str[i-1].equals(" ")) {
				answer += str[i].toUpperCase();
			}
			else {
				answer += str[i];
			}
		}
		
		System.out.println(answer);
	}

}

//JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 
// 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
//문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.