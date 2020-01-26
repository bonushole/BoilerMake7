import React from 'react';
import {Row} from './row.js';
import {Slot} from './slot.js';
import './style/inventory.scss';


import cornImage from '../Icons/corn.png'
import cottonImage from '../Icons/cotton.png'
import tomatoImage from '../Icons/tomato.png'
import wheatImage from '../Icons/wheat.png'
import soybeanImage from '../Icons/soybean.png'

var options = ["corn", "cotton", "tomato", "wheat", "soybean"];
var images = [cornImage,tomatoImage, cottonImage, wheatImage, soybeanImage];
var prices = [10,18,20,12,15];

export class Inventory extends React.Component{

    constructor(props, game){
        super(props);
        this.slots = [];
        for(var i = 0; i < options.length; i++){
            var slot = new Slot(null, game, options[i], images[i],prices[i]);
            this.slots.push(slot);
        }        
    
    }

    render() {
    
        var slots = []
        
        for(var i = 0; i < this.slots.length; i++){
        
            slots.push(this.slots[i].render());
        
        }
        
        return( 
            <div className='inventory'>
            
                {
                    slots
                }
            
            </div>
            
        );
    
    }
}
