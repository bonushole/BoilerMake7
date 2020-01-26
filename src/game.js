import React from 'react';
import {Grid} from './grid.js';
import {Inventory} from './inventory.js';
import './style/grid.scss';

import './style/itemPrice.scss';
import './style/accountBalance.scss';

var gridSize = 5;

export class Game extends React.Component{

    constructor(props){
        super(props);
        this.grid = new Grid(null,this);
        this.cells = this.grid.getCells();
        this.inventory = new Inventory(null,this);
        this.toggled = null;
        this.balance = 50.0;
        this.itemPrice = 0.0; 
    }

    setToggled(slot){
    
        if(this.toggled!=null){
            this.toggled.untoggle();
        }
        this.toggled = slot;
        this.toggled.toggle();
        this.itemPrice = this.toggled.price;
        this.forceUpdate();
    
    }
    
    doCellAction(cell){
    
        if(this.toggled==null){
            return;
        }
        console.log(this.balance);
        console.log(this.toggled.price);
        if(this.balance >= this.toggled.price){
            
            this.balance-=this.toggled.price;
            cell.setCrop(this.toggled.type,this.toggled.image);
            this.forceUpdate();
        }else{
            console.log("too pricey apparently");
        }
        
    
    }

    render() {
    
        var grid = this.grid.render();
        var inventory = this.inventory.render();
        
        var balanceText = "balance: " + this.balance;
        var priceText = "price: " + this.itemPrice;
        
        return( 
            <div>
                
                <div className='itemPrice'>{balanceText}</div>
                <div className='accountBalance'>{priceText}</div>
                
                {grid}
                <br/>
                {inventory}
            </div>
            
        );
    
    }
}
