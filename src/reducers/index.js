import scrollReducer  from './isScroll';
import { combineReducers } from 'redux'


const allReducers = () => combineReducers({
    scroll : scrollReducer
});

export default allReducers;