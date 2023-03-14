package programmers;

import java.util.*;

public class P12939 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		String s = sc.nextLine();
		
		String[] strArray = s.split("\\s");
		
		int[] numArray = Arrays.stream(strArray).mapToInt(Integer::parseInt).toArray();
		Arrays.sort(numArray);
//		System.out.println(numArray[0] + " " + numArray[numArray.length-1]);
		
		String answer = numArray[0] + " " + numArray[numArray.length-1];
		System.out.println(answer);
		
		sc.close();
	}

}

// P12939
// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있음
// str에 나타나는 숫자 중 최소와 최대를 찾아 "(min) (max)" 형태의 문자열 반환
// s에는 둘 이상의 정수가 공백으로 구분되어 있음