import React from 'react';
import { useEffect } from "react";
import { tick } from './actions';
import { connect } from 'react-redux';

function Timer(props) {
   let intervalID;
   useEffect(() => {
      if(props.time) {
         intervalID = setInterval(props.tick, 1000);
      }

      return () => clearInterval(intervalID);
   });

   return (
      <div>
         <h1>
            Time passed: {Math.floor(props.time / 60)} minutes {(props.time % 60)} seconds
         </h1>
      </div>
   );
}

function mapStateToProps(state) {
   return {
      time: state.timeHandler
   }
}

const mapDispatchToProps = {
   tick
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);