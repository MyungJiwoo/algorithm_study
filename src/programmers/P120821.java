package programmers;

import java.util.ArrayList;
import java.util.List;

public class P120821 {
    public static void main(String[] args) {
        int[] num_list = {1, 2, 3, 4, 5};
        List<Integer> answer = new ArrayList<>();

        for(int i=num_list.length-1; i>=0; i--){
            answer.add(num_list[i]);
        }

    }
}

// P120821 : 배열 뒤집기