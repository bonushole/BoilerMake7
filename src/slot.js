import React from 'react';
import './style/slot.scss';
import './style/slotSelected.scss';


export class Slot extends React.Component{

    constructor(props, game, type, image, price){
       super(props);
       this.game = game;
       this.onClick = this.onClick.bind(this);
       this.toggled = false;
       this.type = type;
       this.image = image;
       this.price = price;
       //this.image = require('../Icons/'+ this.type+'.png');
    
    }
    
    onClick(){
    
        console.log("clicked");
        console.log(this);
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
                <div className='slotSelected' onClick={this.onClick} style={{textAlign:"center"},{float: "left"}}> <img style={{display:"inline-block"}} src={this.image} /> </div>
                
            );
        }else{
         
            
            return( 
                <div className='slot' onClick={this.onClick} style={{textAlign:"center"},{float: "left"}}> <img style={{display:"inline-block"}} src={this.image} /> </div>
                
            );
        }
    
    }
}
