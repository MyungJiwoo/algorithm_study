package programmers;

public class P42842 {
    public static void main(String[] args) {
        int brown = 8;
        int yellow = 1;


        // yellow 기준 계산
        for(int i = yellow; Math.sqrt(yellow) <= i; i--){
            if(yellow%i==0){
                int width = i;
                int height = yellow/i;

//                System.out.println(width + " " + height);

                int b = ((width+1) + (height+1))*2;
//                System.out.println("brown: " + b);

                if(brown == b){
                    System.out.println("[" + (width+2) + ", " + (height+2) + "]");
                }
            }
        }
    }
}

// P42842 : 카펫
