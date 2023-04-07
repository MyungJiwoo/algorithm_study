package programmers;

public class P12931 {

	public static void main(String[] args) {
		int n = 123;
		int answer = 0;
		
		String num = String.valueOf(n);
		for(int i=0; i<num.length(); i++) {
			answer += Character.getNumericValue(num.charAt(i));
		}
		
		System.out.println(answer);
	}
}

// P12931
// 주어진 자연수 N의 각 자릿수의 합을 구해서 리턴