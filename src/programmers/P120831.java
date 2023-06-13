package programmers;

public class P120831 {
    public static void main(String[] args) {
        int n = 4;
        int answer = 0;

        for(int i=0; i<=n; i++){
            if(i % 2 == 0) {
                System.out.println(i);
                answer += i;
            }
        }

        System.out.println(answer);
    }
}

// 짝수 합 구하기