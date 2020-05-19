const SHOW_CARD = 'SHOW_CARD';

function showCard(id) {
   return {
      type: SHOW_CARD,
      id
   }
}