import React, { Fragment } from 'react';
import './card_component/СardBox.js';
import './app.module.scss';
import CardBox from './card_component/СardBox.js';

class App extends React.Component{
    render(){
        return(
            <Fragment>
                <div>Hello World</div>
                <CardBox/>
            </Fragment>
        )
    }
}

export default App;