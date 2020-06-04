const TICK = 'TICK';
const START_TIMER ='START_TIMER'

export function tick() {
   return {
      type: TICK
   }
}

export function startTimer() {
   return {
      type: START_TIMER
   }
}