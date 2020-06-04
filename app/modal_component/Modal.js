import React, { useState } from 'react';
import { connect } from 'react-redux';
import styles from './modal.module.scss';

function ModalBox(props) {
   const [closedStatus, setClosed] = useState(false);

   const onClose = () => setClosed(true);

   return (
      <div className={`${styles.modal} ${(props.allGuessed && !closedStatus) ? '' : styles.hidden}`} id="modal">
        <h2>Congratulations!</h2>
        <div className={styles.content}>{props.children}</div>
        <div className={styles.actions}>
          <button className="toggle-button" onClick={onClose}>
            close
          </button>
        </div>
      </div>
   );
}

function mapStateToProps(state) {
   return {
      allGuessed: ( (state) => {
         if(!state.cardsSet.length) return false;
         return state.cardsSet.every( card => card.guessed === true);
      })(state)
   }
}

export default connect(mapStateToProps, null)(ModalBox);