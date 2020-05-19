import React, { Fragment } from 'react';
import './card_component/СardBox.js';
import './app.module.scss';
import CardBox from './card_component/СardBox.js';

class App extends React.Component{
    render(){
        return(
            <Fragment>
                <div>Find Pair Game
                    <button 
                        id='start'
                        
                    >
                    Start
                    </button>

                    <label for='level'> 
                    Choose a difficulty level
                    </label>
                    <select id='level'>
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

export default App;