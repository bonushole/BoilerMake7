import React from 'react';
import {Row} from './row.js';
import {Slot} from './slot.js';
import './style/grid.scss';

var numOptions = 2;

export class Inventory extends React.Component{

    constructor(props){
        super(props);
        this.slots = [];
        for(var i = 0; i < numOptions; i++){
            var slot = new Slot();
            this.slots.push(slot);
        }        
    
    }

    render() {
    
        var slots = []
        
        for(var i = 0; i < this.slots.length; i++){
        
            slots.push(this.slots[i].render());
        
        }
        
        return( 
            <div>
            
                {
                    slots
                }
            
            </div>
            
        );
    
    }
}
