import React from 'react';
import {Grid} from './grid.js';
import {Inventory} from './inventory.js';
import './style/grid.scss';

var gridSize = 5;

export class Game extends React.Component{

    constructor(props){
        super(props);
        this.grid = new Grid(null,this);
        this.inventory = new Inventory(null,this);
        this.toggled = null; 
    }

    setToggled(slot){
    
        if(this.toggled!=null){
            this.toggled.untoggle();
        }
        this.toggled = slot;
        this.toggled.toggle();
        this.forceUpdate();
    
    }

    render() {
    
        var grid = this.grid.render();
        var inventory = this.inventory.render();
        
        return( 
            <div>
                {grid}
                <br/>
                {inventory}
            </div>
            
        );
    
    }
}
