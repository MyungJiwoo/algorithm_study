package programmers;

import java.util.Arrays;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class P178871 {
	 public static <K, V> K getKey(Map<K, V> map, V value) {
		 
		 
	        for (K key : map.keySet()) {
	            if (value == map.get(key)) {
	                return key;
	            }
	        }
	        return null;
	    }
   
   public static void main(String[] args) {
      String[] players = {"mumu", "soe", "poe", "kai", "mine"};
      String[] callings = {"kai", "kai", "mine", "mine"};
      
      HashMap<String, Integer> hashPlayers = new HashMap<>();
      for(int i=0; i<players.length; i++) {
    	  hashPlayers.put(players[i], i);
      }
      
      System.out.println(hashPlayers);
      
      for(int i=0; i<callings.length; i++) {
    	  if(hashPlayers.containsKey(callings[i])) {
    		  int rank = hashPlayers.get(callings[i]);
    		  int r = rank;
    		  
    		  // 선두 순위 내리기
    		  hashPlayers.replace(getKey(hashPlayers, r-1), r);
    		  System.out.println("선두 순위 down " + hashPlayers);
    		  
    		  System.out.println(rank);
    		  // 이름 불린 애 등수 up
    		  hashPlayers.replace(callings[i], --rank);
    		  System.out.println("순위 up " + hashPlayers);
    	  }
      }
      
      ArrayList<String> list = new ArrayList<>();
      for(int i=0; i<hashPlayers.size();i++) {
    	  list.add(getKey(hashPlayers, i));
      }
      
      System.out.println(list);
      
   }
}

// P178871: 달리기 경주
// 해설진은 추월한 선수의 이름을 부름
// 선수 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열 players와 (중복값 없음)
// 해설진이 부른 이름을 담은 문자열 배열 callings가 매개변수로 주어질 때 (players 원소로만 이뤄짐)
// 경기가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 배열에 담아 리턴

// 인덱스가 등수니까
// 이름 불린 만큼 카운트해
// 그리고 오름차순 정렬하면서 새 배열에 이름을 넣어??