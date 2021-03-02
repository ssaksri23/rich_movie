//노마드코더 rendering Movies 영상
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import palette from '../lib/palette';
import cn from 'classnames';

const MovieBlock = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 3rem 3rem;
    background: ${palette['wrapperColor']};

    & + & {
        margin-top: 0.5rem;
    }

    .side__left {
        flex: 1;
        display: inherit;
        align-items: center;
        
        .movie__title {
            flex: 1;
            width: 5rem;
            font-size: 2.2rem;
            color: ${palette['strongColor']};
        }

        .movie__rank-block {
            display: flex;
            flex: 0.3;

            .movie__rank{
                font-size: 3rem;
                border: 1px solid ${palette['backgroundColor']};
                border-radius: 50%;
                padding: 1rem;
                width: 1.5em;
                text-align: center;
            }


            .movie__rankOldAndNew{
                align-self: flex-start;
                margin: 0;
                font-weight: 500;
                ${props => props.rankOldAndNew === 'NEW'? 
                    {color: palette['NewRankColor']}: 
                    {color: palette['OldRankColor']}
                }
            }
        }
    }

    .side__right {
        flex: 0.5;
        display: inherit;
        flex-flow: column wrap;
        justify-content: space-around;
        align-items: flex-end;
    }
`



const Movie = ({id,title,openDt, rank, rankOldAndNew, audiAcc}) => {

    
    // console.log(rankOldAndNew === 'NEW');
    audiAcc = audiAcc.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //천 단위 (,) 붙이는 코드
    return (
        <MovieBlock rankOldAndNew={rankOldAndNew}>
            <div className="side__left">
                <div className="movie__rank-block">
                    <h5 className="movie__rank">{rank}</h5>
                    <h4 className='movie__rankOldAndNew'>
                        {rankOldAndNew ==="NEW"? 'new' : 'old'}
                    </h4>
                </div>
                <h2 className="movie__title">{title}</h2>
            </div>
            <div className="side__right">
                <h3 className="movie__openDate">
                    {(openDt !== 'null' && openDt !== ' ' ? `개봉일 : ${openDt}` : `개봉일 : no data`)}
                </h3>
                <h5 className="audiAcc">관객 수(누적) : {audiAcc}명</h5>
            </div>
        </MovieBlock>
            

    )
};

Movie.propTypes = {
    id: PropTypes.string.isRequired,  // id = movieCd
    title : PropTypes.string.isRequired, //title = movieNm
    openDt : PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
    rankOldAndNew: PropTypes.string.isRequired,
    audiAcc: PropTypes.string.isRequired,
}

export default Movie;