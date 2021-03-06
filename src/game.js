import React from 'react';
import {Grid} from './grid.js';
import {Inventory} from './inventory.js';
import './style/grid.scss';

import './style/itemPrice.scss';
import './style/accountBalance.scss';
import './style/cell.scss';
import './style/endBar.scss';
import './style/sun.scss';

import sun from '../Icons/sun.png'


var gridSize = 5;

export class Game extends React.Component{

    constructor(props){
        super(props);
        this.grid = new Grid(null,this);
        this.inventory = new Inventory(null,this);
        this.toggled = null;
        this.balance = 50.0;
        this.itemPrice = 0.0;
        this.showingBoard = true;
        this.cropYield = 0;
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
            
            if(this.toggled.type == "tiller"){
            
            }
            else if(this.toggled.type == "compost"){
                cell.fertilize();
            }else{
                cell.setCrop(this.toggled.type,this.toggled.image);
            }
            this.forceUpdate();
        }else{
            console.log("too pricey apparently");
        }
    }
    
    calculateAndShowTotals(self){
        
        console.log("clicked");
        self.cropYield = self.grid.calcYield();
        self.showingBoard = false;
        
        self.balance += self.cropYield;
        self.forceUpdate();
    
    }
    
    returnToGrid(self){
        
        console.log("clicked");
        self.showingBoard = true;
        self.grid.clear();
        self.forceUpdate();
        
    }

    render() {
    
        var grid = this.grid.render();
        var inventory = this.inventory.render();
        
        var balanceText = "balance: " + this.balance;
        var priceText = "price: " + this.itemPrice;
        var self = this;
        var calcAndShow = function(){self.calculateAndShowTotals(self)};
        var endText = ">>";
        var goBack = function(){self.returnToGrid(self)};
        
        
        if(this.showingBoard){
            return( 
                <div>
                    <div className='sun'><img style={{display:"inline-block"}} src={sun} /></div>
                    <div className='accountBalance'>{balanceText}</div>
                    <div className='itemPrice'>{priceText}</div>
                    
                    {grid}
                    <br/>
                    {inventory}
                    <div className='endBar' onClick={calcAndShow}>{endText}</div>
                </div>
                
            );
        }else{
        
            return(
            <div>
                <div>{this.cropYield}</div>
                <div onClick={goBack} className='endBar'>{endText}</div>
            </div>
            );
        }
    
    }
}
