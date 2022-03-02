import PropTypes from 'prop-types';
declare const Movie: {
    ({ title, openDt, rank, rankOldAndNew, audiAcc }: {
        title: any;
        openDt: any;
        rank: any;
        rankOldAndNew: any;
        audiAcc: any;
    }): JSX.Element;
    propTypes: {
        id: PropTypes.Validator<string>;
        title: PropTypes.Validator<string>;
        openDt: PropTypes.Validator<string>;
        rank: PropTypes.Validator<string>;
        rankOldAndNew: PropTypes.Validator<string>;
        audiAcc: PropTypes.Validator<string>;
    };
};
export default Movie;
