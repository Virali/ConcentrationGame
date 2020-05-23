function createSet(cardQuantity) {  // number of cards: easy - 12,  med - 20, hard - 32
   const set = [];

   for (let index = 0; index < cardQuantity/2; index++) {
      const card = {
         opened: false,
         guessed: false,
         sign: index,
         id: Symbol(index)
      }
      set.push(
         card, 
         Object.defineProperty(Object.assign({},card), 'id', {
            value: Symbol(index),
            configurable: true,
            enumerable: true,
            writable: true
         })
      );
   }

   return set;
}

function shuffle(array) {
   return array.sort(() => Math.random() - 0.5);
}

function app(state = [], action) {
   switch (action.type) {
      case 'START': {
         switch (action.difficulty) {
            case 'easy': 
               return shuffle(createSet(12));
            case 'medium':
               return shuffle(createSet(20));
            case 'hard': 
               return shuffle(createSet(32));
         }
      }
      case 'SHOW_CARD': {
         return state.filter(card => {
            if(card.id === action.id) {
               card.opened = true;
            }
            return true;
         });
      }
      case 'CHECK_COINCIDENCE': {
         const newState = [...state];

         const openedCards = newState.filter(card => {
            if(card.opened) 
               if(!card.guessed)
                  return true;
         });

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

export default app;