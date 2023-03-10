package programmers;

//import java.util.regex.*;

public class babbling {
	public static void main(String[] args) {
		String[] words = {"aya", "ye", "woo", "ma"};
		int answer = 0;
		
		// test case
		String[] babbling = {"ayaye", "uuuma", "ye", "yemawoo", "ayaa"};
		
		
		for(int i=0; i<babbling.length; i++) {
			// 문자열 대체
			for(int j=0;j<4;j++) {
				babbling[i] = babbling[i].replace(words[j], "0");
			}
			 if(babbling[i].matches("^[0-9]*$")) answer++;
		}
		
		System.out.println(answer);
	}
}

// 조카는 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한 발음만 가능
// 문자열 배열이 매개변수로 주어질 때, 조카가 발음할 수 있는 단어의 개수를 리턴

// 정규표현식으로 푼 정답
//  if(babbling[i].matches("^(aya(?!aya)|ye(?!ye)|woo(?!woo)|ma(?!ma))+$"))