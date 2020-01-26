import React from 'react';
import './style/slot.scss';
import './style/slotSelected.scss';


export class Slot extends React.Component{

    constructor(props, game, type, image){
       super(props);
       this.game = game;
       this.onClick = this.onClick.bind(this);
       this.toggled = false;
       this.type = type;
       this.image = image;
       //this.image = require('../Icons/'+ this.type+'.png');
    
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
    
        //var src = '../Icons/'+ this.type+'.png';
        console.log(this.image);
        if(this.toggled){
            return( 
                <div src={this.image} className='slotSelected' onClick={this.onClick} style={{float: "left"}}> slot </div>
                
            );
        }else{
         
            
            return( 
                <div src={this.image} className='slot' onClick={this.onClick} style={{float: "left"}}> <img src={this.image} /> </div>
                
            );
        }
    
    }
}
