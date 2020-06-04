const SHOW_CARD = 'SHOW_CARD';
const CHECK_COINCIDENCE = 'CHECK_COINCIDENCE';
const BLOCK_CLICKING = 'BLOCK_CLICKING';
const UNBLOCK_CLICKING = 'UNBLOCK_CLICKING';

function showCard(id) {
   return {
      type: SHOW_CARD,
      id
   }
}

function checkCards() {
   return {
      type: CHECK_COINCIDENCE
   }
}

function blockClicking() {
   return {
      type: BLOCK_CLICKING
   }
}

function unblockClicking() {
   return {
      type: UNBLOCK_CLICKING
   }
}

export function showBlockCheckUnblock(dispatch, id) {
   dispatch(showCard(id));
   dispatch(blockClicking());

   setTimeout(() => {
      dispatch(checkCards()),
      dispatch(unblockClicking())
   }, 600);
}