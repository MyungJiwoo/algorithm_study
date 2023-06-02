package programmers;

import java.util.ArrayList;
import java.util.List;

public class P147335 {
    public static void main(String[] args) {
        String t = "35457221";
        String p = "271";
        int answer = 0;

        int p_len = p.length();
        long p_num = Long.parseLong(p);

        for(int i=0; i<t.length()-p_len; i++){
            long num = Long.parseLong(t.substring(i, i+p_len));
            if(num <= p_num) answer ++;
        }

        System.out.println(answer);
    }
}

// P147335 : 크기가 작은 부분 문자열
