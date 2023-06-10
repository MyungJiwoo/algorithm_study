package programmers;

public class P120817 {
    public double solution(int[] numbers) {
        double answer = 0;

        for(int i : numbers){
            answer += i;
        }
        return answer/numbers.length;
    }
}

// 배열의 평균값