package programmers;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class P12934 {
    public static void main(String[] args) {
        long n = 3;

        long answer = 0;

        double num = Math.sqrt(n);

        if(num == (int)num) answer = (long)Math.pow(num+1, 2);
        else answer = -1;





//        long answer = (long)Math.pow(num+1, 2);

        System.out.println(answer);
    }
}
