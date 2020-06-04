function createSetFromArray(array, cardQuantity) {
   return array
      .filter(number => number < cardQuantity/2)
      .map(number => {
         return {
         opened: false,
         guessed: false,
         sign: number,
         id: Symbol(number)
         }
      });
}


function findOpenedNotGuessed(card) {
   if(card.opened) 
      if(!card.guessed)
         return true;
}

function cardReducer(state = [], action) {
   switch(action.type) {
      case 'START': {
         switch (action.difficulty) {
            case 'easy': 
               return createSetFromArray(action.randomArray,12);
            case 'medium':
               return createSetFromArray(action.randomArray,20);
            case 'hard': 
               return createSetFromArray(action.randomArray,32);
         }
      }
      case 'SHOW_CARD': {
         if(state.filter(findOpenedNotGuessed).length < 2) {
            return state.filter(card => {
               if(card.id === action.id) {
                  card.opened = true;
               }
               return true;
            });
         }
      }
      case 'CHECK_COINCIDENCE': {
         const newState = [...state];

         const openedCards = newState.filter(findOpenedNotGuessed);

         if(openedCards.length === 2) {
            if(openedCards[0].sign === openedCards[1].sign) {
               openedCards.forEach(card => card.guessed = true);
            } else {
               openedCards.forEach(card => card.opened = false);
            }
         }

         return newState;
      }
      default: return state;
   }
}

export default cardReducer;