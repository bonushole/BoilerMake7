import React from 'react';
import './style/slot.scss';

export class Slot extends React.Component{

    constructor(props, game){
       super(props);
    
    }

    render() {
    
    //style={{float: "left"}}
        return( 
            <div className='slot' style={{float: "left"}}> slot </div>
            
        );
    
    }
}
