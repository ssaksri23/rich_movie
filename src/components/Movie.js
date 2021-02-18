//노마드코더 rendering Movies 영상
import React from 'react';
import PropTypes from 'prop-types';

const Movie = () => {
    return <h1>Movie Components</h1>
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