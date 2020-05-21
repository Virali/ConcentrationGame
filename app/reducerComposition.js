import { combineReducers } from 'redux';
import startReducer from './start_component/reducers';
import cardReducer from './card_component/reducers';

const composition = combineReducers({
   startReducer,
   cardReducer
});

export default composition;