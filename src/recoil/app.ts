import {atom} from "recoil";


/**
 * key : Atom의 이름과 같은 기능. 전역적으로 유일한 값이어야함.
 * default: atom 의 초기값. 즉, react의 state 초기값과 같음.
 */
export const mainAtom = atom({
  key: 'mainAtom',
  default: {
    loading: false,
    error: false,
    movies: null, 
    date: '',
    nation: null,
    posters: [],
    names: null,
  },  //  === useState([])

})