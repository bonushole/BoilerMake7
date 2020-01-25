import React from 'react';
import {Row} from './row.js';
import {Cell} from './cell.js';
import './style/grid.scss';

var gridSize = 10;

export class Grid extends React.Component{

    constructor(props){
        super(props);
        this.rows = [];
        this.cells = [];
        for(var i = 0; i < 10; i++){
        
            var row = [];
            
            for(var j = 0; j < 10; j++){
            
                var cell = new Cell();
                this.cells.push(cell);
                row.push(cell);
              
            }
            this.rows.push(new Row(null, row));
        
        }
        console.log(this.rows);
        
    
    }

    render() {
    
        var rows = []
        
        
        
        for(var i = 0; i < 10; i++){
        
            rows.push(this.rows[i].render());
        
        }
    
        return( 
            <div className='grid'>
            
                {
                    rows
                }
            
            </div>
            
        );
    
    }
}
