const set = []; // card numbers: easy - 12,  med - 20, hard - 32

for (let index = 0; index < 16; index++) {
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

function shuffle(array) {
   return array.sort(() => Math.random() - 0.5);
}

let openedCards = [];

function app(state = [], action) {
   switch (action.type) {
      case 'START': {
         switch (action.difficulty) {
            case 'easy': 
               return shuffle(set.slice(0,12));
            case 'medium':
               return shuffle(set.slice(0,20));
            case 'hard': 
               return shuffle(set);
         }
      }
      case 'SHOW_CARD': {
         const newState = state.filter(card => {
            if(card.id === action.id) {
               card.opened = true;
               openedCards.push(card)
            }
            return true;
         });

         if(openedCards.length === 2) {
            if(openedCards[0].sign === openedCards[1].sign) {
               openedCards.forEach(card => card.guessed = true);
            } else {
               openedCards.forEach(card => card.opened = false);
            }
            openedCards = [];
         }

         return newState;
      }
      default: return state;
   }
}

export default app;