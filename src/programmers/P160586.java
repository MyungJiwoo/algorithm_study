package programmers;

import java.util.HashMap;

public class P160586 {

	public static void main(String[] args) {
		String[] keymap = {"ABACD", "BCEFD"};
		String[] targets = {"ABCD", "AABB"};
		int[] result = new int[targets.length];
		
		HashMap<Character, Integer> keys = new HashMap<Character, Integer>();
		
		for(int i=0; i<keymap.length; i++) {
			for(int j=0; j<keymap[i].length(); j++) {
				if(keys.containsKey(keymap[i].charAt(j))) {	
					if(keys.get(keymap[i].charAt(j)) > j) {
						keys.put(keymap[i].charAt(j), j+1);
					}
				}
				else {
					keys.put(keymap[i].charAt(j), j+1);
				}
			}
		}
		
		System.out.println(keys);
		
		
		for(int i=0; i<targets.length; i++) {
			for(int j=0; j<targets[i].length(); j++) {
				if(keys.containsKey(targets[i].charAt(j))){
					result[i] += keys.get(targets[i].charAt(j));
					System.out.println(targets[i].charAt(j) + " " + i);
				}
				else {
					result[i] = -1;
					break;
				}
			}
		}
		
//		System.out.println(result[0] + " " + result[1]);

	}

}

// P160586: 대충만든 자판