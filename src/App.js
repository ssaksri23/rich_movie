import React,{useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import Movie from './components/Movie';
import Conditions from './components/Conditions';
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`


const App = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState(null);
  const [date, setDate] = useState('');
  const [nation, setNation] = useState('');
  const [posters, setPosters] = useState([]);
  const [names, setNames] = useState(null);

  const getMovies = async (DATE) => {
    
    try {
      setMovies(null);
      setLoading(true);
      const {
        data: {
          boxOfficeResult: {dailyBoxOfficeList}
        }
      } = await axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=4010de0e4173634fe5b671b20aea7c21&targetDt=${DATE}&repNationCd=${nation}`);
      setMovies(dailyBoxOfficeList);

      const titles = dailyBoxOfficeList;
    }catch(e){
      setError(true);
      console.log('에러 원인:',e);
    }

    setLoading(false);
  };
  
  useEffect(()=> {
    // if(date)
    //   getMovies();
 
  }, []);

  const DateHandler = useCallback(e => {
      let inputDate ='';
      inputDate = e.target.value;
      inputDate.length === 8 || (parseInt(inputDate) || inputDate === '') ?
        setDate(e.target.value):alert('숫자 형식으로 입력해주세요!') && setDate('')
  }, []);

  const SubmitDate = useCallback(e => {
    (date.length === 8 ? getMovies(date) : alert('입력하신 날짜를 확인해주세요.'));
  }, [date])

  
  const NationHandler = useCallback(e => {
    let Nation = e.target.value === 'K'? setNation('K') : setNation('F');
    return Nation;
  }, []);


  return (
    <section className='container'>
      <GlobalStyles/>
      <Conditions date={date} dateHandler={DateHandler} nationHandler={NationHandler} submitDate={SubmitDate} />

      {movies?
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
          </div>):
          loading? 
            (
              <LoaderWrapper>
                데이터를 불러오는 중..
              </LoaderWrapper>) :
            (
              <LoaderWrapper>
                검색 조건을 설정해주세요.
              </LoaderWrapper>
            )
      }
    </section>
  );
};

export default App;