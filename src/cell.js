import React from 'react';
import './style/cell.scss';

export class Cell extends React.Component{

    constructor(props, game){
       super(props);
       this.game = game;
       this.crop = null;
    
    }

    render() {
    
    //style={{float: "left"}}
        return( 
            <div className='cell' style={{float: "left"}}> </div>
            
        );
    
    }
}
