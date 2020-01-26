import React from 'react';
import './style/cell.scss';
import './style/darkerCell.scss';

const crops = ["corn", "cotton", "tomato", "wheat", "soybean"];
const yieldPrice = [11,20,25,13,18];

export class Cell extends React.Component{

    constructor(props, game){
       super(props);
       this.game = game;
       this.crop = null;
       this.image = null;
       this.fertilized = false;
    
    }
    
    setCrop(crop, image){
    
        this.crop = crop;
        this.image = image;
    
    }
    
    fertilize(){
    
        this.fertilized = true;
    
    }
    
    calcYield(){
    
        if(this.crop == null){
            return 0;
        }else{
            var basePrice = yieldPrice[crops.indexOf(this.crop)];
            if(this.fertilized){
                basePrice+=Math.floor(0.15 * basePrice);
            }
            
            return basePrice;
        }
    }
    
    clear(){
    
        this.crop = null;
        this.image = null;
        this.fertilized = false;
    
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
        
        var className1 = "";
        if(this.fertilized){
        
            className1 = "darkerCell";
        
        }else{
        
            className1 = "cell";
        
        }
        console.log(className1);
        if(this.image == null){
            return( 
                <div className={className1} onClick={callBack} style={{float: "left"}}> </div>        
            );
        }else{
            return( 
                <div className={className1} onClick={callBack} style={{textAlign:"center"},{float: "left"}}> <img style={{display:"inline-block"}} src={this.image} /> </div>
                
            );
        }
    
    }
}
