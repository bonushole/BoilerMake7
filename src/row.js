import React from 'react';
import './style/row.scss';

export class Row extends React.Component{

    constructor(props, cells){
        super(props);
        this.cells = cells;
    
    }

    render() {
    
        var cells = [];
        for(var i = 0; i < this.cells.length; i++){
        
            cells.push(this.cells[i].render());
        
        }
        //style={{overflow:"hidden"}}
        return( 
            <div className='row' style={{overflow:"hidden"}}>
            
                {
                    cells
                }
            
            </div>
            
        );
        
        return (<div className='row' style={{overflow:"hidden"}}> row </div>);
    
    }
}
