package programmers;

public class P70129 {
	static int zeroCount = 0;
	static int count = 0;
	
	public static String conv (String s) {
		count ++;
		
		for(int i=0; i<s.length(); i++) {
			if(s.charAt(i) == '0') {
				zeroCount ++;
			}
		}
		s = s.replaceAll("0", "");
		
		s = Integer.toBinaryString(s.length());
		System.out.println(s.equals("1"));
		
		return s;
	}

	public static void main(String[] args) {
		String s = "110010101001";
		
		String str = conv(s);
		while(!str.equals("1")) {
			str = conv(str);
		};
		
		int[] answer = {count, zeroCount};

		System.out.println(answer[0] + " " + answer[1]);
	}

}

// P70129 : 이진 변환 반복하기
// 이진변환 : x의 모든 0을 제거 => x의 길이를 c라고 하면, x를 c를 이진법으로 표현한 문자열로 변경
// s가 1이 될 때까지 계속해서 s에 이진 변환
// 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 리턴