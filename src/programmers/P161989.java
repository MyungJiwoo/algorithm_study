package programmers;

import java.util.Arrays;

public class P161989 {

	public static void main(String[] args) {
		int n = 8;
		int m = 4;
		int[] section = {2, 3, 6};
		
		boolean[] array = new boolean[n];
		Arrays.fill(array, false);
		
		
		
		for(int i=0; i<section.length; i++) {
			array[section[i]-1] = true;
		}
		
		System.out.println("*" + Arrays.toString(array));
		
		
		// 페인트
		int answer = 0;
		for(int i=0; i<array.length; i++) {
			if(array[i]) {
				for(int j=0; j<m; j++) {
					if(i+j < array.length) {
						array[i+j] = false;
						System.out.println("바꿈");
					}

				}
				answer ++;
				System.out.println(Arrays.toString(array));
			}
		}
		
		System.out.println(answer);
	}

}

// P161989 : 덧칠하기