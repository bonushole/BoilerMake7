import React from 'react';
import './style/cell.scss';

export class Slot extends React.Component{

    constructor(props, cells){
       super(props);
    
    }

    render() {
    
    //style={{float: "left"}}
        return( 
            <div className='cell' style={{float: "left"}}> slot </div>
            
        );
    
    }
}
