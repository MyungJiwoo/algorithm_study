package programmers;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;

public class P150370 {
    public static void main(String[] args) {
        String today = "2022.05.19";
        String[] terms = {"A 6", "B 12", "C 3"};
        String[] privacies = {"2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"};

        ArrayList<Integer> answer = new ArrayList<Integer>();

        // todayArr[0] = year, todayArr[1] = month
        String[] todayArr = today.split("[.]");

        // key = type, value = month[0], month[1]
        HashMap<String, int[]> map = new HashMap<>();
        for(int i=0; i<terms.length; i++){
            String[] t = terms[i].split(" ");

            int[] month = new int[2];
            int m = Integer.valueOf(t[1]);
            if(m >= 12){
                month[0] = m/12;
                month[1] = m%12;
            }
            else {
                month[0] = 0;
                month[1] = m;
            }
            map.put(t[0], month);
        }


        for(int i=0; i<privacies.length; i++){
            String[] p = privacies[i].split(" ");   // p[0] = 동의 날짜, p[1] = 타입
            String[] p_date = p[0].split("[.]");    // p_date[0] = year, p_date[1] = month

            int map_y = map.get(p[1])[0];   // 해당 타입의 year 값
            int map_m = map.get(p[1])[1];   // 해당 타입의 month 값

            // LocalDate 객체로 날짜 계산하기
            LocalDate local_pri = LocalDate.of(Integer.parseInt(p_date[0]), Integer.parseInt(p_date[1]), Integer.parseInt(p_date[2]));  // 가입한 날짜 객체
            LocalDate local_today = LocalDate.of(Integer.parseInt(todayArr[0]), Integer.parseInt(todayArr[1]), Integer.parseInt(todayArr[2]));  // 오늘 날짜 객체

            // 유효한 날짜 객체
            LocalDate local_available = local_pri.plusYears(map_y);
            local_available = local_available.plusMonths(map_m);

            System.out.println("오늘: " + local_today);
            System.out.println("유효: " + local_available);

            // 날짜 비교
            if(!local_today.isBefore(local_available)) answer.add(i+1);

        }

        System.out.println(answer);

    }
}

// P150370: 개인정보 수집 유효기간