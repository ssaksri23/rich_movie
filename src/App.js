import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Movie from './components/Movie';


const App = () => {

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [date, setDate] = useState(null);
  const [nation, setNation] = useState('K')
  const getMovies = async () => {
    const {
      data: {
        boxOfficeResult: {dailyBoxOfficeList}
      }
    } = await axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=4010de0e4173634fe5b671b20aea7c21&targetDt=${date}&repNationCd=${nation}`);
    setMovies({dailyBoxOfficeList});
    console.log(dailyBoxOfficeList);
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
    <>
      <div className="buttonBlock">
        <button value="K" onClick={NationHandler}>국내영화</button>
        <button value="F" onClick={NationHandler}>해외영화</button>
      </div>
      <input 
        type="text" 
        placeholder="조회 날짜 입력 예) 20210214"
        onChange={dateHandler}/>
      <div>{loading? "Loading data.." : "Success load"}
      </div>
    </>
  );
};

export default App;