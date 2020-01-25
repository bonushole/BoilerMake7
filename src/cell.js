import React from 'react';
import './style/cell.scss';

export class Cell extends React.Component{

    constructor(props, cells){
       super(props);
    
    }

    render() {
    
    //style={{float: "left"}}
        return( 
            <div className='cell'> cell </div>
            
        );
    
    }
}
