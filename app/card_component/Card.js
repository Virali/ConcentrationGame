import React, { Fragment, useState } from 'react';
import classes from './styleCard.module.scss'

function Card(props) {
   [face, setFace] = useState(false);
   const faceUp = {
      color: props.color,
   };

   return (
      <div 
         className={`${classes.card} ${ face ? '' : classes.face-down}`}
         onClick={() => setFace(!face)}
         style={face ? faceUp : ''}
      />
   );
}

export default Card;