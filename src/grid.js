import React from 'react';
import {Row} from './row.js';
import {Cell} from './cell.js';
import './style/grid.scss';

var gridSize = 5;

export class Grid extends React.Component{

    constructor(props, game){
        super(props);
        this.rows = [];
        this.cells = [];
        for(var i = 0; i < gridSize; i++){
        
            var row = [];
            
            for(var j = 0; j < gridSize; j++){
            
                var cell = new Cell(null, game);
                this.cells.push(cell);
                row.push(cell);
              
            }
            this.rows.push(new Row(null, row));
        
        }
        console.log(this.rows);
        
    
    }

    getCells(){
    
        return this.cells;
    
    } 
    
    calcYield(){
        var cropYield = 0;
        for(var i = 0; i < this.cells.length; i++){
        
            cropYield += this.cells[i].calcYield();
        
        }
        
        return cropYield;
    
    }   
    
    render() {
    
        var rows = []
        
        
        
        for(var i = 0; i < this.rows.length; i++){
        
            rows.push(this.rows[i].render());
        
        }
    
        return( 
            <div className='grid'style={{overflow:"hidden"}}>
            
                {
                    rows
                }
            
            </div>
            
        );
    
    }
}
