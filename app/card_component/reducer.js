export default function clickManagerReducer(state = false, action) {
   switch(action.type) {
      case 'BLOCK_CLICKING':
         return true;
      case 'UNBLOCK_CLICKING':
         return false;
      default: 
         return state;
   }
}