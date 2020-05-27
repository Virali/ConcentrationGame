import React from 'react';
import Card from './Card.js';
import { connect } from 'react-redux';
import styles from './styleCard.module.scss';

function CardBox(props) {
   return (
      <div
         className={`${ styles.flexbox } ${ props.isBlocked ? styles.no_pointer_events : '' }`}
      >
         {props.set}
      </div>
   );
}

function mapStateToProps(state) {
   let simpleKey = 0;
   return {
      set: state.cardsSet.map(element => {
         simpleKey++;
         return <Card 
            key={simpleKey}
            id={element.id}
            opened={element.opened}
            guessed={element.guessed}
            sign={element.sign}
         />
      }),
      isBlocked: state.blockManager
   }
}

export default connect(mapStateToProps, null)(CardBox);