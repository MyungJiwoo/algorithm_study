package programmers;

import java.util.ArrayList;
import java.util.List;

public class P181927 {
    public static void main(String[] args) {
        int[] num_list = {2, 1, 6};

        List<Integer> result = new ArrayList<>();

        for(int i : num_list) result.add(i);


        int last = num_list[num_list.length - 1];
        int last_before = num_list[num_list.length - 2];

        if(last > last_before){
            result.add(last - last_before);
        }
        else{
            result.add(last * 2);
        }

        for(int i : result){
            System.out.println(i);
        }
    }
}

// 마지막 두 원소