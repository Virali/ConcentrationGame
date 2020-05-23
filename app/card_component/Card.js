import React, { useState } from 'react';
import styles from './styleCard.module.scss';
import { showCard, checkCards } from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function Card(props) {
   return (
      <div 
         className={`
            ${styles.card}
            ${ props.opened ? styles.face_up : styles.face_down} 
            ${ props.guessed ? styles.guessed : ''}
         `}
         onClick={() => {
            props.show(props.id);
            setTimeout(() => props.check(), 400); // where to forbid click after two cards revealed?
         }}
      >
         {(props.opened) ? props.sign : ''}
      </div>
   );
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({
      show : showCard,
      check : checkCards
   },dispatch);
}

export default connect(null, mapDispatchToProps)(Card);