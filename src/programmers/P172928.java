package programmers;

public class P172928 {
	// 현재위치 X, Y;
	static int x = 0;
	static int y = 0;
	
	
	// 이동 가능해? : 이동할 다음 방향이 o인지 X인지 계산
	static boolean next(char r, int i, int j, char[][] solPark) {
//		System.out.println("다음 위치 확인중... " + i +  "(i) " + j + "(j)");
		
		if(String.valueOf(r).equals("N") && 0<=i-1) {
			if(String.valueOf(solPark[i-1][j]).equals("O")) return true;
		}
		if(String.valueOf(r).equals("S") && i+1<solPark.length) {
			if(String.valueOf(solPark[i+1][j]).equals("O")) return true;
		}
		if(String.valueOf(r).equals("W") && 0<=j-1) {
			if(String.valueOf(solPark[i][j-1]).equals("O")) return true;
		}
		if(String.valueOf(r).equals("E") && j+1<solPark[i].length ) {
			if(String.valueOf(solPark[i][j+1]).equals("O")) return true;
		}
		
		return false;
	}
	
	
	// 이동 해줘 : 방향 r, 이동 칸수 c
	static void direction(char r, int c, char[][] solPark) {
		int i = x;
		int j = y;
		
		boolean ok = true;
		
		for(int z=0; z<c; z++) {
			if(next(r, i, j, solPark)) {
				if(String.valueOf(r).equals("N")) i--;
				else if(String.valueOf(r).equals("S")) i++;
				else if(String.valueOf(r).equals("W")) j--;
				else if(String.valueOf(r).equals("E")) j++;
			} else ok=false;
		}
		
		if(ok) {
			if(String.valueOf(r).equals("N")) x-=c;
			else if(String.valueOf(r).equals("S")) x+=c;
			else if(String.valueOf(r).equals("W")) y-=c;
			else if(String.valueOf(r).equals("E")) y+=c;
		}
	}

	
	public static void main(String[] args) {
		String[] park = {"OSO","OOO","OXO","OOO"};
		String[] routes = {"E 2","S 3","W 1"};
//		String[] park = {"SOO","OXX","OOO"};
//		String[] routes = {"E 2","S 2","W 1"};
//		String[] park = {"OSO","OOO","OXO","OOO"};
//		String[] routes = {"E 2","S 3","W 1"};
		char[][] solPark = new char[park.length][park[0].length()];
		
		// 좌표 준비
		for(int i=0; i<park.length; i++) {
			for(int j=0; j<park[i].length(); j++) {
				solPark[i][j] = park[i].charAt(j);
				if(String.valueOf(solPark[i][j]).equals("S")) {
					x = i;
					y = j;
				}
			}
		}
		System.out.println("초기 S 위치: " + x + "(x) " + y + "(y)");
		
		// 이동해보자
		for(int i=0; i<routes.length; i++) {
			char r = routes[i].charAt(0);
			int c = Character.getNumericValue(routes[i].charAt(routes[i].length()-1));
			
			direction(r, c, solPark);
			System.out.println(r + "로 " + c + "칸 이동 후 : " + x + "(x) " + y + "(y)");
		}
		
		System.out.println(x + " " + y);

	}

}

// 지나다니는 길을 O, 장애물을 X로 나타낸 직사각형 격자 모양의 공원에서 로봇 강아지가 산책
// ["방향 거리",  "방향 거리"] => E 5 = 동으로 5칸

// 주어진 방향으로 이동할 때 공원을 벗어나는지 확인
// 주어진 방향으로 이동 중 장애물을 만나는지 확인
// 위 두개 중 하나라도 해당하면, 로봇 강아지는 해당 명령을 무시하고 다음 명령 수행

// 공원의 가로 길이가 W, 세로 길이가 H라 할 때, 공원 좌측 상단의 좌표는 (0, 0) / 우측 하단의 좌표는 (H -1, W - 1)
// 공원을 나타내는 문자열 배열 park, 로봇 강아지가 수행할 명령이 담긴 문자열 배열 routes가 파라미터로 주어질 때,
// 로봇 강아지가 모든 명령을 수행 후 놓인 위치를 [세로 방향 좌표, 가로 방향 좌표]로 리턴

// N : 북으로 => i-1
// S : 남으로 => i+1
// W : 서로 => j-1
// E : 동으로 => j+1




// 지나가는 길인 park를 2차원 배열로 만들기 + 시작 위치 집어두기
// 가야할 방향이 적힌 route에서 방향과 가는 칸 개수 떼기
// route를 돌며 방향과 칸수를 이동하기
// 이동할 방향 +1을 해서 O인지 X인지 계산하기
// 만약 O라면 이동하고 X라면 다음 방향으로 점프