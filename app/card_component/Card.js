import React, { useState } from 'react';
import styles from './styleCard.module.scss';
import { showBlockCheckUnblock } from './actions';
import { connect } from 'react-redux';

function Card(props) {
   return (
      <div 
         className={`
            ${styles.card}
            ${ props.opened ? styles.face_up : styles.face_down} 
            ${ props.guessed ? styles.guessed : ''}
         `}
         onClick={() => {
            props.showAndCheck(props.id)
         }}
      >
         {(props.opened) ? props.sign : ''}
      </div>
   );
}

function mapDispatchToProps(dispatch) {
   return {
      showAndCheck: (id) => showBlockCheckUnblock(dispatch, id)
   }
}

export default connect(null, mapDispatchToProps)(Card);