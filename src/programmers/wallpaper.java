package programmers;

public class wallpaper {

	public static void main(String[] args) {
		String[] wallpaper = {"..", "#."};
		
		char[][] wallpaperArray = new char[wallpaper.length][wallpaper[0].length()];
		
		// x1 : x최솟값, x2: x최댓값, y1: y최솟값, y2: y최댓값
		int x1=wallpaper.length; 
		int y1=wallpaper[0].length(); 
		int x2=0, y2=0; 
		
		// 좌표를 위해 배열로 변환
		for(int i=0; i<wallpaperArray.length; i++) {	// 세로줄
			for(int j=0; j<wallpaperArray[i].length; j++) {	// 가로줄
				wallpaperArray[i][j] = wallpaper[i].charAt(j);
				
				// 파일 위치 좌표의 최대, 최소 계산
				if(wallpaperArray[i][j] == '#') {
					if(i<=x1) x1 = i;
					if(i>=x2) x2 = i+1;
					if(j<=y1) y1 = j;
					if(j>=y2) y2 = j+1;
				}
			}
		}
		System.out.println("[" + x1 + ", " + y1 + ", " + x2 + ", " + y2 + "]");
	}
}

// Q161990
// 컴퓨터 바탕화면의 상태를 나타낸 문자열 배열 wallpaper이 존재
// 파일들은 바탕화면의 격자칸에 위치하고 바탕화면의 격자점들은 바탕화면의 가장 왼쪽 위를 (0, 0)으로 시작해 (세로 좌표, 가로 좌표)로 표현
// 빈칸은 ".", 파일이 있는 칸은 "#"의 값을 가짐
// 머쓱이는 최소한의 이동거리를 갖는 한 번의 드래그로 모든 파일을 선택해서 한 번에 지우려고 함
// 드래그는 바탕화면의 격자점 S(lux, luy)를 마우스 왼쪽 버튼으로 클릭한 상태로 격자점 E(rdx, rdy)로 이동한 뒤 마우스 왼쪽 버튼을 떼는 행동
// 점 S(lux, luy)에서 점 E(rdx, rdy)로 드래그를 할 때, "드래그 한 거리"는 |rdx - lux| + |rdy - luy|로 정의
// 머쓱이의 컴퓨터 바탕화면의 상태를 나타내는 문자열 배열 wallpaper가 매개변수로 주어질 때
// 바탕화면의 파일들을 한 번에 삭제하기 위해 최소한의 이동거리를 갖는 드래그의 시작점과 끝점을 담은 정수 배열을 return하는 solution 함수
// 드래그의 시작점이 (lux, luy), 끝점이 (rdx, rdy)라면 정수 배열 [lux, luy, rdx, rdy]를 return




// [1, 3, 4, 7]
// [0, 0, 6, 8]
// [0, 1, 2, 3]
// [0, 1, 3, 4]
// [x중 최솟값, y중 최솟값, x중 최댓값+1, y중 최댓값+1]