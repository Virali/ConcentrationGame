import React, { useState } from 'react';
import styles from './styleCard.module.scss';
import { showBlockCheckUnblock } from './actions';
import { connect } from 'react-redux';

function Card(props) {
   if(props.guessed) return null;
   return (
      <div 
      className={`${styles.card} ${ props.opened ? styles.flip : ''} ${ props.guessed ? styles.guessed : ''}`}
      onClick={() => {
         props.showAndCheck(props.id)
      }}>
         <div
         className={styles.card_inner}>
            <div
            className={styles.back}/>
            <div
            className={styles.front}>
               {(props.opened) ? props.sign : ''}
            </div>
         </div>
      </div>
   );
}

function mapDispatchToProps(dispatch) {
   return {
      showAndCheck: (id) => showBlockCheckUnblock(dispatch, id)
   }
}

export default connect(null, mapDispatchToProps)(Card);