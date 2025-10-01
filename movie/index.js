const movies = [
  {
    "start": "08:50",
    "end": "10:29",
    "note": "조조",
    "title_rating": "노바디2 청소년 관람불가",
    "seats_hall": "172/172석5관 (Laser)",
    "format": "2D",
    "title": "노바디2"
  },
  {
    "start": "09:00",
    "end": "11:45",
    "note": "조조",
    "title_rating": "극장판 귀멸의 칼날-무한성편 15세 관람가",
    "seats_hall": "106/123석4관[SCREENX]",
    "format": "2D",
    "title": "극장판 귀멸의 칼날-무한성편"
  },
  {
    "start": "09:15",
    "end": "12:00",
    "note": "조조",
    "title_rating": "F1 더 무비 12세 관람가",
    "seats_hall": "123/123석2관 (Laser)",
    "format": "2D",
    "title": "F1 더 무비"
  },
  {
    "start": "09:40",
    "end": "11:37",
    "note": "조조",
    "title_rating": "살인자 리포트 청소년 관람불가",
    "seats_hall": "118/123석6관 (Laser)",
    "format": "2D",
    "title": "살인자 리포트"
  },
  {
    "start": "09:50",
    "end": "11:54",
    "note": "조조",
    "title_rating": "좀비딸 12세 관람가",
    "seats_hall": "142/144석1관",
    "format": "2D",
    "title": "좀비딸"
  },
  {
    "start": "10:00",
    "end": "12:45",
    "note": "조조",
    "title_rating": "극장판 귀멸의 칼날-무한성편 15세 관람가",
    "seats_hall": "140/172석3관",
    "format": "2D",
    "title": "극장판 귀멸의 칼날-무한성편"
  },
  {
    "start": "11:00",
    "end": "13:45",
    "note": "",
    "title_rating": "극장판 귀멸의 칼날-무한성편 15세 관람가",
    "seats_hall": "164/172석5관 (Laser)",
    "format": "2D",
    "title": "극장판 귀멸의 칼날-무한성편"
  },
  {
    "start": "12:10",
    "end": "13:40",
    "note": "",
    "title_rating": "식스데이즈(6DAYS)(SCREENX 2D) 전체 관람가",
    "seats_hall": "103/123석4관[SCREENX]",
    "format": "SCREENX 2D",
    "title": "식스데이즈(6DAYS) (SCREENX 2D)"
  },
  {
    "start": "12:20",
    "end": "14:12",
    "note": "",
    "title_rating": "첫사랑 엔딩 전체 관람가",
    "seats_hall": "120/123석2관 (Laser)",
    "format": "2D",
    "title": "첫사랑 엔딩"
  },
  {
    "start": "14:00",
    "end": "16:04",
    "note": "",
    "title_rating": "좀비딸 12세 관람가",
    "seats_hall": "118/123석4관[SCREENX]",
    "format": "2D",
    "title": "좀비딸"
  },
  {
    "start": "14:20",
    "end": "16:17",
    "note": "",
    "title_rating": "살인자 리포트 청소년 관람불가",
    "seats_hall": "93/123석6관 (Laser)",
    "format": "2D",
    "title": "살인자 리포트"
  },
  {
    "start": "15:20",
    "end": "18:05",
    "note": "",
    "title_rating": "극장판 귀멸의 칼날-무한성편 15세 관람가",
    "seats_hall": "144/144석1관",
    "format": "2D",
    "title": "극장판 귀멸의 칼날-무한성편"
  },
  {
    "start": "16:30",
    "end": "18:34",
    "note": "",
    "title_rating": "좀비딸 12세 관람가",
    "seats_hall": "121/123석4관[SCREENX]",
    "format": "2D",
    "title": "좀비딸"
  },
  {
    "start": "17:20",
    "end": "20:05",
    "note": "",
    "title_rating": "극장판 귀멸의 칼날-무한성편 15세 관람가",
    "seats_hall": "166/172석5관 (Laser)",
    "format": "2D",
    "title": "극장판 귀멸의 칼날-무한성편"
  },
  {
    "start": "18:30",
    "end": "21:15",
    "note": "",
    "title_rating": "극장판 귀멸의 칼날-무한성편 15세 관람가",
    "seats_hall": "144/144석1관",
    "format": "2D",
    "title": "극장판 귀멸의 칼날-무한성편"
  },
  {
    "start": "19:10",
    "end": "21:14",
    "note": "",
    "title_rating": "좀비딸 12세 관람가",
    "seats_hall": "123/123석4관[SCREENX]",
    "format": "2D",
    "title": "좀비딸"
  },
  {
    "start": "19:50",
    "end": "22:15",
    "note": "",
    "title_rating": "컨저링-마지막 의식 15세 관람가",
    "seats_hall": "116/123석2관 (Laser)",
    "format": "2D",
    "title": "컨저링-마지막 의식"
  },
  {
    "start": "21:15",
    "end": "23:19",
    "note": "",
    "title_rating": "좀비딸 12세 관람가",
    "seats_hall": "123/123석6관 (Laser)",
    "format": "2D",
    "title": "좀비딸"
  },
  {
    "start": "21:50",
    "end": "23:42",
    "note": "",
    "title_rating": "투게더 15세 관람가",
    "seats_hall": "122/123석4관[SCREENX]",
    "format": "2D",
    "title": "투게더"
  },
  {
    "start": "23:00",
    "end": "25:25",
    "note": "",
    "title_rating": "컨저링-마지막 의식(올무비나잇) 15세 관람가",
    "seats_hall": "121/123석2관 (Laser)",
    "format": "2D 개별상영",
    "title": "컨저링-마지막 의식(올무비나잇)"
  },
  {
    "start": "23:40",
    "end": "26:25",
    "note": "",
    "title_rating": "극장판 귀멸의 칼날-무한성편 15세 관람가",
    "seats_hall": "172/172석5관 (Laser)",
    "format": "2D",
    "title": "극장판 귀멸의 칼날-무한성편"
  },
  {
    "start": "24:05",
    "end": "26:30",
    "note": "심야",
    "title_rating": "컨저링-마지막 의식(SCREENX 2D) 15세 관람가",
    "seats_hall": "123/123석4관[SCREENX]",
    "format": "SCREENX 2D",
    "title": "컨저링-마지막 의식(SCREENX 2D)"
  },
  {
    "start": "24:45",
    "end": "26:38",
    "note": "심야",
    "title_rating": "긴키 지방의 어느 장소에 대하여 15세 관람가",
    "seats_hall": "144/144석1관",
    "format": "2D",
    "title": "긴키 지방의 어느 장소에 대하여"
  }
]

// id="container" 요소를 선택 (영화 목록이 들어갈 HTML 박스)
const container = document.querySelector('#container');

// 영화 배열을 순회하며 화면에 출력
for (const movie of movies) {
  // '청소년 관람불가' 등급은 제외 (필터링 조건)
  if (movie.title_rating.includes("청소년 관람불가")) {
    continue; // 건너뛰고 다음 영화로 넘어감
  }

  // HTML에 영화 한 줄을 추가
  container.innerHTML += `
   <div class="line"> <!-- 한 줄의 영화 정보 박스 -->
    <div class="time"> <!-- 상영 시작~종료 시간 -->
      ${movie.start}~${movie.end}
    </div>
    <div class="rear"> <!-- 오른쪽 영화 정보 블럭 -->
      <div class="title">${movie.title}</div> <!-- 영화 제목 -->
      <div class="info">${movie.title_rating}</div> <!-- 관람 등급 -->
      <div class="seats">${movie.seats_hall}</div> <!-- 좌석/상영관 정보 -->
      <div class="format">${movie.format}</div> <!-- 상영 포맷 -->
    </div>
  </div>
`;
}