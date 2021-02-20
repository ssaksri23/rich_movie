import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Movie from './components/Movie';


const App = () => {

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState(null);
  const [date, setDate] = useState("20210214");
  const [nation, setNation] = useState('K');
  const [posters, setPosters] = useState([]);
  const [names, setNames] = useState(null);

  const getMovies = async () => {
    const {
      data: {
        boxOfficeResult: {dailyBoxOfficeList}
      }
    } = await axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=4010de0e4173634fe5b671b20aea7c21&targetDt=${date}&repNationCd=${nation}`);

    setMovies(dailyBoxOfficeList);

//https://www.data.go.kr/data/3035985/openapi.do
//영화 이미지 불러올 검색 api 키 발급 신청 (검토중..)
    setLoading(false);
  };
  
  useEffect(()=> {
    if(date)
      getMovies();
  }, [date]);

  const dateHandler = (e) => {
      let inputDate ='';
      inputDate += e.target.value;
      if(inputDate.length === 8)
        setDate(e.target.value);
  };

  const NationHandler = (e) => {
    let Nation = e.target.value === 'K'? setNation('K') : setNation('F');
    return Nation;
  }

  return (
    <section className='container'>
      <div className="searchBox">
        <div className="buttonBlock">
          <button value="K" onClick={NationHandler}>국내영화</button>
          <button value="F" onClick={NationHandler}>해외영화</button>
        </div>
        <input 
          type="text" 
          placeholder="조회 날짜 입력 예) 20210214"
          onChange={dateHandler}
          />
        <div className='loader'>

      </div>
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
          ))
        }
        </div>
        )}
      </div>
    </section>
  );
};

export default App;