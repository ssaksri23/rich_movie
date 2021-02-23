import React,{useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import Movie from './components/Movie';
import Conditions from './components/Conditions';
import GlobalStyles from './GlobalStyles';

const App = () => {

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState(null);
  const [date, setDate] = useState('');
  const [nation, setNation] = useState('');
  const [posters, setPosters] = useState([]);
  const [names, setNames] = useState(null);

  const getMovies = async (DATE) => {
    const {
      data: {
        boxOfficeResult: {dailyBoxOfficeList}
      }
    } = await axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=4010de0e4173634fe5b671b20aea7c21&targetDt=${DATE}&repNationCd=${nation}`);

    setMovies(dailyBoxOfficeList);

//https://www.data.go.kr/data/3035985/openapi.do
//영화 이미지 불러올 검색 api 키 발급 신청 (검토중..)
    setLoading(false);
  };
  
  useEffect(()=> {
    if(date)
      getMovies();
  }, []);

  const DateHandler = useCallback(e => {
      let inputDate ='';
      inputDate = e.target.value;
      inputDate.length === 8 || (parseInt(inputDate) || inputDate === '') ?
        setDate(e.target.value):alert('숫자 형식으로 입력해주세요!') && setDate('')
  }, []);

  const SubmitDate = useCallback(e => {
    (date.length === 8 ? getMovies(date) : alert('입력하신 날짜를 확인해주세요.'));
  }, [])

  
  const NationHandler = useCallback(e => {
    let Nation = e.target.value === 'K'? setNation('K') : setNation('F');
    return Nation;
  }, []);

  return (
    <section className='container'>
      <GlobalStyles/>
      <Conditions date={date} dateHandler={DateHandler} nationHandler={NationHandler} submitDate={SubmitDate} />
      {/* 리팩토링 구문 ==> Conditions.js //
      <div className="conditions-wrapper">
        <div className="buttons-block">
          <button value="K" onClick={NationHandler}>국내영화</button>
          <button value="F" onClick={NationHandler}>해외영화</button>
        </div>
        <input 
          type="text" 
          placeholder="조회 날짜 입력 예) 20210214"
          onChange={dateHandler}
          />
      </div> */}

      <div className='loader'>
        {loading ? 
          "검색 조건을 설정해주세요." : 
          (<div className="movies">
            {movies.map(movie=> (
              <Movie title={movie.movieNm} 
                    id={movie.movieCd}
                    key={movie.movieCd} 
                    openDt={movie.openDt}  
                    rank={movie.rank}  
                    rankOldAndNew={movie.rankOldAndNew}  
                    audiAcc={movie.audiAcc}
              />
            ))}
        </div>
        )}
      </div>
    </section>
  );
};

export default App;