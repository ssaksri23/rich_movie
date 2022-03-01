var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState, useCallback } from 'react';
import axios from 'axios';
import Header from './common/Header';
import Footer from './common/Footer';
import Movie from './components/Movie';
import Conditions from './components/Conditions';
import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';
import palette from './lib/palette';
const Container = styled.div ``;
const LoaderWrapper = styled.div `
  display: flex;
  justify-content: center;
  margin: 3rem auto;
  height: 10rem;
`;
const MainWrapper = styled.section `
  border-top: 1px solid ${palette['fontStrongColor']};
  border-bottom: 1px solid ${palette['fontStrongColor']};
  height: auto;
`;
const App = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [movies, setMovies] = useState(null);
    const [date, setDate] = useState('');
    const [nation, setNation] = useState(null);
    const [posters, setPosters] = useState([]);
    const [names, setNames] = useState(null);
    const getMovies = (DATE) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            setMovies(null);
            setLoading(true);
            const { data: { boxOfficeResult: { dailyBoxOfficeList } } } = yield axios.get(`https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=4010de0e4173634fe5b671b20aea7c21&targetDt=${DATE}&repNationCd=${nation}`);
            setMovies(dailyBoxOfficeList);
            // dailyBoxOfficeList = [{rnum:'', rank:'', rankOldAndNew:'', movieNm: '원더우먼'}]
            // titles = ['원더우먼', '화양연화','조제','소울','도굴', ...]
            const TitleAndDates = dailyBoxOfficeList.map((movie) => ({
                name: movie.movieNm,
                date: movie.openDt
            }));
            // GetPosterImg();
            console.log(`TitleAndDates: ${TitleAndDates}`);
        }
        catch (e) {
            setError(true);
            console.log('에러 원인:', e);
        }
        setLoading(false);
    });
    const DateHandler = useCallback((e) => {
        let inputDate = '';
        inputDate = e.target.value;
        inputDate.length === 8 || parseInt(inputDate) || inputDate === ''
            ? setDate(e.target.value)
            : alert('숫자 형식으로 입력해주세요!') && setDate('');
    }, []);
    const SearchExcute = useCallback((e) => {
        if (date.length === 8 && nation !== null)
            getMovies(date);
        else if (date.length !== 8 && nation !== null)
            alert('입력하신 날짜를 확인해주세요.');
        else
            alert('검색할 국가를 선택해주세요.');
    }, [date, nation]);
    const NationHandler = useCallback((e) => {
        const { target: { attributes: { value: { value } } } } = e;
        let Nation = value === 'K' ? setNation('K') : setNation('F');
        return Nation;
    }, []);
    return (React.createElement(Container, null,
        React.createElement(GlobalStyles, null),
        React.createElement(Header, null),
        React.createElement(Conditions, { date: date, nation: nation, dateHandler: DateHandler, nationHandler: NationHandler, SearchExcute: SearchExcute }),
        React.createElement(MainWrapper, null, movies ? (React.createElement("div", { className: "movies" }, movies.map((movie) => (React.createElement(Movie, { title: movie === null || movie === void 0 ? void 0 : movie.movieNm, id: movie === null || movie === void 0 ? void 0 : movie.movieCd, key: movie === null || movie === void 0 ? void 0 : movie.movieCd, openDt: movie === null || movie === void 0 ? void 0 : movie.openDt, rank: movie === null || movie === void 0 ? void 0 : movie.rank, rankOldAndNew: movie === null || movie === void 0 ? void 0 : movie.rankOldAndNew, audiAcc: movie === null || movie === void 0 ? void 0 : movie.audiAcc }))))) : loading ? (React.createElement(LoaderWrapper, null, "\uB370\uC774\uD130\uB97C \uBD88\uB7EC\uC624\uB294 \uC911..")) : (React.createElement(LoaderWrapper, null, "\uAC80\uC0C9 \uC870\uAC74\uC744 \uC124\uC815\uD574\uC8FC\uC138\uC694."))),
        React.createElement(Footer, null)));
};
export default App;
