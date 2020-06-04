import React from 'react';
import '../card_component/СardBox.js';
import styles from './app.module.scss';
import CardBox from '../card_component/СardBox.js';
import Timer from '../timer_component/Timer.js';
import Modal from '../modal_component/Modal';
import { connect } from 'react-redux';
import { start } from "./actions";
import { startTimer } from '../timer_component/actions';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.changeDifficulty = this.changeDifficulty.bind(this);
      this.initiateStart = this.initiateStart.bind(this);
      this.state = { 
         difficulty: 'easy',
         modalVisibily: false
      }
   }

   changeDifficulty(e) {
      this.setState({
         difficulty: e.target.value
      });
   }

   initiateStart(difficulty) {
      this.props.createSet(difficulty);
      this.props.startTimer();
   }

   render(){
      return(
         <div 
         className={styles.container}
         id='main_container'>
            <div>Find Pair Game
               <button 
               id='start'
               onClick={() => this.initiateStart(this.state.difficulty)}>
                  Start
               </button>

               <label htmlFor='level'> 
               Choose a difficulty level
               </label>
               <select 
               id='level'
               onChange={this.changeDifficulty}>
                  <option value='easy'>Easy</option>
                  <option value='medium'>Medium</option>
                  <option value='hard'>Hard</option>
               </select>
            </div>
            <Timer/>
            <CardBox/>
            <Modal>
               You win for {Math.floor(this.props.time / 60)} minutes {(this.props.time % 60)} seconds
            </Modal>
         </div>
      )
   }
}

function mapStateToProps(state) {
   return {
      time: state.timeHandler
   }
}

const mapDispatchToProps = {
   createSet: start,
   startTimer: startTimer
}

export default connect(mapStateToProps, mapDispatchToProps)(App);