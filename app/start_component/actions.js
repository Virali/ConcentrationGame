const START = 'START';

export function start(difficulty) {
   return {
      type: START,
      difficulty,
      randomArray: shuffle(createArray())
   }
}

function createArray() {
   const array = []; 

   for(let i = 0; i < 16; i++) {
      array.push(i,i);
   }

   return array;
}

function shuffle(array) {
   return array.sort(() => Math.random() - 0.5);
}