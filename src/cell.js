import React from 'react';
import './style/cell.scss';

export class Cell extends React.Component{

    constructor(props, game){
       super(props);
       this.game = game;
       this.crop = null;
       this.image = null;
    
    }
    
    setCrop(crop, image){
    
        this.crop = crop;
        this.image = image;
    
    }

    onClick(){
        
        console.log("clicked");
        console.log(this);
        this.game.doCellAction(this);
    
    }

    render() {
    
    //style={{float: "left"}}
        var cell = this;
        
        var callBack = function() {cell.onClick(cell);}
    
        if(this.image == null){
            return( 
                <div className='cell' onClick={callBack} style={{float: "left"}}> </div>
                
            );
        }else{
            return( 
                <div className='cell' onClick={callBack} style={{textAlign:"center"},{float: "left"}}> <img style={{display:"inline-block"}} src={this.image} /> </div>
                
            );
        }
    
    }
}
