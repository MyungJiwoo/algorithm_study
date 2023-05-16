package programmers;

public class P120806 {
    public int solution(int num1, int num2) {
        int answer = 0;
        
        double a = 0;
        
        a = ((double)num1/(double)num2)*1000;
        answer = (int) a;
        System.out.println(a);
        return answer;
    }
}
