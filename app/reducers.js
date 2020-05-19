import {start} from "./actions";

const set = []; // card numbers: easy - 12,  med - 20, hard - 32
for (let index = 0; index < 16; index++) {
   set.push(index, index);
}

function app(state, action) {
   switch (action.type) {
      case 'START': {
         switch (action.difficulty) {
            case 'easy': 
               return set.slice(0,11);
            case 'medium':
               return set.slice(0,19);
            case 'hard': 
               return set;
         }
      }
   }
}