package programmers;

public class P120830 {
    public static void main(String[] args) {
        int n = 64;
        int k = 6;

        if(n>9) {
            int service = n / 10;
            k -= service;
        }

        int answer = (n * 12000) + (k * 2000);

        System.out.println(answer);
    }
}

// 양꼬치
// 양꼬치 1인분에 12,000 ==> n인분
// 음료수 1캔 2,000 ==> k캔