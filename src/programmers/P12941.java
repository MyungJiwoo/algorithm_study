package programmers;

import java.util.*;

public class P12941 {

	public static void main(String[] args) {
//		int[] a = {1, 2};
//		int[] b = {3, 4};
//		
//		Integer intB[] = Arrays.stream(b).boxed().toArray(Integer[]::new);
//		int total =0 ;
//		
//		Arrays.sort(a);
//		Arrays.sort(intB, Collections.reverseOrder());
//		
//		for(int i=0; i<a.length; i++) {
//			System.out.println(a[i] + " * " + intB[i]);
//			total += a[i] * intB[i];
//		}
//
//		System.out.println(total);
		
		int[] a = {1, 4, 2};
		int[] b = {5, 4, 4};
		
		int total =0 ;
		
		Arrays.sort(a);
		Arrays.sort(b);
		
		for(int i=0; i<a.length; i++) {
			total += a[i] * b[b.length - (i+1)];
		}

		System.out.println(total);
	}

}

// P12941
// 길이가 같은 2개의 배열이 있고, 각 배열의 최솟값을 곱해 다음 최솟값을 곱하면서 배열의 크기만큼 반복