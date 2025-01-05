export interface BoxOfficeApiReturnData {
  boxOfficeResult: {
    boxofficeType: string; // 박스오피스 타입
    showRange: string; // 표시 기간
    dailyBoxOfficeList: DailyBoxOffice[]; // 일별 박스오피스 리스트
  };
}

interface DailyBoxOffice {
  rnum: string; // 순번
  rank: string; // 현재 순위
  rankInten: string; // 전일 대비 순위 변화
  rankOldAndNew: string; // 신규 여부 ("OLD" or "NEW")
  movieCd: string; // 영화 코드
  movieNm: string; // 영화명
  openDt: string; // 개봉일
  salesAmt: string; // 당일 매출액
  salesShare: string; // 매출 점유율 (%)
  salesInten: string; // 전일 대비 매출 증감액
  salesChange: string; // 매출 증감률 (%)
  salesAcc: string; // 누적 매출액
  audiCnt: string; // 당일 관객수
  audiInten: string; // 전일 대비 관객 증감수
  audiChange: string; // 관객 증감률 (%)
  audiAcc: string; // 누적 관객수
  scrnCnt: string; // 상영관 수
  showCnt: string; // 상영 횟수
}
