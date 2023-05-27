package programmers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class P12932 {
    public static void main(String[] args) {
        long n = 12341139;

        String strNum = String.valueOf(n);
        int[] num = Stream.of(strNum.split("")).mapToInt(Integer::parseInt).toArray();
        List<Integer> list
                = Arrays.stream(num)
                .boxed()
                .collect(Collectors.toList());
        Collections.reverse(list);
        System.out.println(list);
    }
}

// [P1C] P12932: 자연수 뒤집어 배열로 만들기