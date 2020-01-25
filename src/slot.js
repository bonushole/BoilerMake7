import React from 'react';
import './style/slot.scss';
import './style/slotSelected.scss';

export class Slot extends React.Component{

    constructor(props, game){
       super(props);
       this.game = game;
       this.onClick = this.onClick.bind(this);
       this.toggled = false;
    
    }
    
    onClick(){
    
        console.log("clicked");
        this.game.setToggled(this);
    
    }
    
    toggle() {
    
        this.toggled = true;
        //this.forceUpdate();
    
    }
    
    untoggle() {
    
        this.toggled = false;
    
    }

    render() {
    
    //style={{float: "left"}}
        if(this.toggled){
            return( 
                <div className='slotSelected' onClick={this.onClick} style={{float: "left"}}> slot </div>
                
            );
        }else{
            return( 
                <div className='slot' onClick={this.onClick} style={{float: "left"}}> slot </div>
                
            );
        }
    
    }
}
