import React from 'react';
import Card from './Card.js';
import { connect } from 'react-redux';

function CardBox(props) {
   return (
      <div>
         {props.set}
      </div>
   );
}

function mapStateToProps(state) {
   let simpleKey = 0;
   return {
      set: state.map(element => {
         simpleKey++;
         return <Card 
            key={simpleKey}
            id={element.id}
            opened={element.opened}
            guessed={element.guessed}
            sign={element.sign}
         />
      }),
   }
}

export default connect(mapStateToProps, null)(CardBox);