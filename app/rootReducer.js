import startComponentReducer from './start_component/reducers';
import cardComponentReducer from './card_component/reducer';
import timeComponentReducer from './timer_component/reducer';

export default function app(state={}, action) {
   return {
      blockManager: cardComponentReducer(state.blockManager, action),
      cardsSet: startComponentReducer(state.cardsSet, action),
      timeHandler: timeComponentReducer(state.timeHandler, action)
   }
}