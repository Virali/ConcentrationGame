import React, { useState } from 'react';
import styles from './styleCard.module.scss';

function Card(props) {
   const [face, setFace] = useState(false);
   const faceUp = {
      backgroundColor: (face) ? props.color: '',
   };

   return (
      <div 
         className={`${styles.card} ${ face ? '' : styles.face_down}`}
         onClick={() => setFace(!face)}
         style={faceUp}
      />
   );
}

export default Card;