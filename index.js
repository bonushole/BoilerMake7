import React from 'react';
//import {createStore} from 'redux';
//import {Board} from './src/components/Board';
import {render} from 'react-dom';
//import {reducer} from './src/store';
//import {Provider} from 'react-redux';
import {Grid} from './src/grid.js';
import './indexSass.scss';



console.log('Definitely working!');

//const store = createStore(reducer);


render(

    <Grid/>,
    
    document.getElementById('app-mount')

    

/*
    <Provider store={store}>
        <Board/>
    </Provider>,
    document.getElementById('app-mount')
    */
);
