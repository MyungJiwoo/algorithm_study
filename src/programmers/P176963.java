package programmers;

import java.util.ArrayList;
import java.util.Arrays;

// 그리운 사람의 리스트 (객체)
class Person{
	String name;
	int yearning;
	int score;
	
	public Person(String name, int yearning) {
		this.name = name;
		this.yearning = yearning;
		this.score = 0;
	}
	
	public int addScore() {
		this.score = 0;
		this.score += this.yearning;
		return this.score;
	}
}


public class P176963 {
	public static void main(String[] args) {
		String[] name = {"may", "kein", "kain", "radi"};
		int[] yearning = {5, 10, 1, 3};
		String[][] photo = {{"may", "kein", "kain", "radi"}, {"may", "kein", "brin", "deny"}, {"kon", "kain", "may", "coni"}};
	
		// 객체 배열 생성 (이름+점수)
		Person[] person = new Person[name.length];
		for(int i=0; i<name.length; i++) {
			person[i] = new Person(name[i], yearning[i]);
		}
		
		// 2차원 배열을 돌며 점수 카운트
		int[] answer = new int[photo.length];
		for(int i=0; i<photo.length; i++) {
			// contains을 사용하기 위해 각 photo 하나마다 ArrayList 생성
			ArrayList<String> photoList = new ArrayList<>(Arrays.asList(photo[i]));
			
			// 점수 합산
			for(int j=0; j<person.length; j++) {
				if(photoList.contains(person[j].name)) {
					person[j].addScore();
					answer[i] += person[j].score;
				}
			}
		}
		
		// 점수 발표
		for(int i=0; i<answer.length; i++) {
			System.out.println(answer[i]);
		}
		
	}

}

// P176963 : 추억 점수
// 입력 1 (name) : 그리운 인물
// 입력 2 (yearning) : 그리움 점수
// 입력 3 (photo) : 2차원 배열의 사진 속 인물
// 결과 : 1차원 배열의 (사진마다) 그리움 점수