import React from 'react';
import {Row} from './row.js';
import {Cell} from './cell.js';
import './style/grid.scss';

export class Grid extends React.Component{

var numOptions = 2;

    constructor(props){
        super(props);
        this.cells = [];
        for(var i = 0; i < numOptions; i++){
                var cell = new Cell();
                this.cells.push(cell);
                row.push(cell);

            this.rows.push(new Row(null, row));
        
        }        
    
    }

    render() {
    
        var slots = [this.slots.render()];
    
        return( 
            <div>
            
                {
                    slots
                }
            
            </div>
            
        );
    
    }
}
