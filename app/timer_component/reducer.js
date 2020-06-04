function timeReducer(state = 0, action) {
   switch(action.type) {
      case 'START_TIMER': {
         state = 1;
         return state;
      }
      case 'TICK': {
         return ++state;
      }
      default: return state;
   }
}

export default timeReducer;