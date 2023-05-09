package programmers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;

public class P159994 {

	public static void main(String[] args) {
		String[] cards1 = {"i", "drink"};
		String[] cards2 = {"want", "to"};
		String[] goal = {"i", "want", "to", "drink", "water"};
		
		List<String> cards1_list = new ArrayList<>(List.of(cards1));
		Queue<String> cards1_queue = new LinkedList<String>(cards1_list);
		
		List<String> cards2_list = new ArrayList<>(List.of(cards2));
		Queue<String> cards2_queue = new LinkedList<String>(cards2_list);
		
		List<String> goal_list = new ArrayList<>(List.of(goal));
		Queue<String> goal_queue = new LinkedList<String>(goal_list);
		
		

		while(!goal_queue.isEmpty()) {
			// 비교할 goal의 카드 한개 
			String card = goal_queue.peek();
			
			if(card.equals(cards1_queue.peek())) {
				cards1_queue.poll();
				goal_queue.poll();
			}
			else if(card.equals(cards2_queue.peek())){
				cards2_queue.poll();
				goal_queue.poll();
			}
			else break;
		}
		
		if(goal_queue.isEmpty()) System.out.println("Yes");
		else System.out.println("No");
		
		
		

	}

}

// P159994: 카드 뭉치

// goal을 만드는게 아니라 goal이 되는지를 확인 => goal을 두개로 나눠서??


// 힙?? 스택?? 큐 (FIFO)


// goal을 큐로 바꿈 (FIFO)
// goal 맨 처음걸 꺼내서
// cards1의 맨 처음과 cards2의 맨 처음과 비교 (다 큐로 만들기)
// 둘 중 하나에 해당하면 해당하는 카드를 삭제
// 둘 다 해당하지 않으면 만들 수 없는 카드