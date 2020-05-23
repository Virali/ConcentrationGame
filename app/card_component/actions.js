const SHOW_CARD = 'SHOW_CARD';
const CHECK_COINCIDENCE = 'CHECK_COINCIDENCE';

export function showCard(id) {
   return {
      type: SHOW_CARD,
      id
   }
}

export function checkCards() {
   return {
      type: CHECK_COINCIDENCE
   }
}