package programmers;

public class P12945 {
    public static int fibonacci(int n){
        if(n == 0) return 0;
        else if(n == 1) return 1;
        return fibonacci(n-1) + fibonacci(n-2);
    }

    public static int fibo(int n){
        if(n ==1 || n==2) return 1;
        if(bottom_up[n] != 0) return bottom_up[n];
        bottom_up[n] = fibo(n-1) + fibo(n-2);
        return bottom_up[n];
    }

    static int[] bottom_up;

    public static void main(String[] args) {
        int n = 3;
//        System.out.println(fibonacci(n) % 1234567);

//        int arr[] = new int[n];
//        arr[0] = 1;
//        arr[1] = 1;f
//        for(int i=2; i<n; i++){
//            arr[i] = arr[i-1] + arr[i-2];
//        }
//        System.out.println(arr[n-1]%1234567);

        bottom_up = new int[n+1];
        System.out.println(fibo(n));

    }
}

// [P0C] P12945: 피보나치 수