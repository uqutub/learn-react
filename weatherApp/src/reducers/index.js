import { combineReducers } from 'redux';

import WeatherReducer from './reducer_search_bar';

const rootReducer = combineReducers({
    weather: WeatherReducer
});

export default rootReducer;