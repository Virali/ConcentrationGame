const START = 'START';

export function start(difficulty) {
   return {
      type: START,
      difficulty
   }
}