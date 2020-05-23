import React, { Fragment } from 'react';
import '../card_component/СardBox.js';
import styles from './app.module.scss';
import CardBox from '../card_component/СardBox.js';
import { connect } from 'react-redux';
import { start } from "./actions";
import { bindActionCreators } from 'redux';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.changeDifficulty = this.changeDifficulty.bind(this);
      this.state = { 
         difficulty: 'easy'
      }
   }

   changeDifficulty(e) {
      this.setState({
         difficulty: e.target.value
      });
   }

   render(){
      return(
         <Fragment>
            <div>Find Pair Game
               <button 
                  id='start'
                  onClick={() => this.props.initiateStart(this.state.difficulty)}
               >
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
            <CardBox/>
         </Fragment>
      )
   }
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({
      initiateStart: start,
   },dispatch);
}

export default connect(null, mapDispatchToProps)(App);