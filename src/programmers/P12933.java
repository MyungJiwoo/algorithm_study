package programmers;

import java.util.Comparator;
import java.util.stream.Stream;

public class P12933 {
    public static void main(String[] args) {
        int n = 118372;
        String stringN = Integer.toString(n);
        int[] numArray = Stream.of(stringN.split("")).mapToInt(Integer::parseInt).toArray();
//        numArray.sort(Comparator.naturalOrder());

    }
}
