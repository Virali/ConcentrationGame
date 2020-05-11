import React from 'react';
import Card from './Card.js';

function CardBox() {

   return (
      <div>
         <Card color='red'/>
         <Card color={'blue'}/>
      </div>
   );
}

export default CardBox;