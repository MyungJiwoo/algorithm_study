package programmers;

import java.util.ArrayList;

public class P12981 {
    public static void main(String[] args) {
        int n = 2;
        String[] words = {"hello", "one", "even", "never", "now", "world", "draw"};
        int[] answer = {0, 0};

        /*
            9/3+1
         */

        // 배열로 중복 확인
        int index = -1;  // 중복된 내용 인덱스

        ArrayList<String> wordList = new ArrayList();
        wordList.add(words[0]);

        for(int i=1; i<words.length; i++){
            char last = words[i-1].charAt(words[i-1].length()-1);
            char first = words[i].charAt(0);

            if(!wordList.contains(words[i]) && last == first) continue;
            else {index = i; break;}
        }
//        System.out.println("틀린 부분 " + index);


        if(index != -1){
            answer[0] = (index + 1) % n;
            if(answer[0] == 0) answer[0] = n;
            answer[1] = index / n + 1;
        }


        System.out.println(answer[0]);
        System.out.println(answer[1]);

    }
}

// P12981 : 영어 끝말잇기
// 중복된 단어를 말하는 사람 탈락
// 전 단어 마지막 글자와 이어지지 않는 사람 탈락

// 우선 중복된 단어를 말하지 않는게 우선