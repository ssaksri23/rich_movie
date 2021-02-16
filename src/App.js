import React,{useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [date, setDate] = useState(null);

  const getMovies = async () => {
    const {
      data: {
        boxOfficeResult: {dailyBoxOfficeList}
      }
    } = await axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=4010de0e4173634fe5b671b20aea7c21&targetDt=${date}`);
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

  return (
    <>
      <input 
        type="text" 
        placeholder="날짜 입력 예) 20210214"
        onChange={dateHandler}/>
      <div>{loading? "Loading data.." : "Success load"}
      </div>
    </>
  );
};

export default App;