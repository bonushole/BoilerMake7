import React from 'react';
import {Row} from './row.js';
import {Slot} from './slot.js';
import './style/inventory.scss';

var numOptions = 5;

export class Inventory extends React.Component{

    constructor(props, game){
        super(props);
        this.slots = [];
        for(var i = 0; i < numOptions; i++){
            var slot = new Slot(null, game);
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
