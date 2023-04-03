package programmers;

public class P120923 {
	public static void main(String[] args) {
		int num = 6;
		int total = 21;
		int[] answer = new int[num];
		
		int n;
		if(num%2==0) {
			n = (total/num)+1;
		}
		else {
			n = total/num;
		}
		
		int c = num/2;
		int start = n-c;
		
		for(int i=0; i<num; i++) {
			answer[i] = start+i;
		}
		
		for(int i=0; i<answer.length; i++) {
			System.out.println(answer[i]);
		}
	}
}

// P120923
// 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5 입니다.
// 두 정수 num과 total이 주어집니다.
// 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 리턴