package programmers;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class P155652 {
    public static void main(String[] args) {
        String s = "aukks";
        String skip = "wbqd";
        int index = 5;
//        String result = "";

        StringBuilder result = new StringBuilder();

        StringBuilder alphabet = new StringBuilder("abcdefghijklmnopqrstuvwxyz");

        for(int i=0; i<skip.length(); i++){
//            alphabet = alphabet.replace(String.valueOf(skip.charAt(i)), "");
            alphabet = alphabet.deleteCharAt(skip.indexOf(skip.charAt(i)));
        }
        System.out.println(alphabet);
        for(int i=0; i<s.length(); i++){
             int str_index = alphabet.indexOf(String.valueOf(s.charAt(i)));
             str_index += index;

             if(str_index > alphabet.length()-1){
                 str_index -= alphabet.length();
             }

             result.append(alphabet.charAt(str_index));
         }










//        String[] arrAlphabet = alphabet.split("");
//
//        for(int i=0; i<s.length(); i++){
//            for(int j=0; j<arrAlphabet.length; j++){
//                if(String.valueOf(s.charAt(i)).equals(arrAlphabet[j])){
//                    if(j+index > arrAlphabet.length-1){
//                        String str = arrAlphabet[j+index-arrAlphabet.length];
//                        result.append(str);
//                    } else {
//                        result.append(arrAlphabet[j+index]);
//                    }
//                }
//            }
//        }

        System.out.println(result);
    }
}

// [P1N] P155652: 둘만의 암호

