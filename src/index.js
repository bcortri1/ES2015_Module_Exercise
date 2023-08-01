import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Foods from './foods.js';
import {Choice, Remove} from './helpers.js';

let fruit = Choice(Foods);
console.log(`I'd like one ${fruit}`);
console.log(`Here you go: ${Remove(Foods,fruit)}`);
console.log(`Delicious! May I have another?`)
console.log(`I'm sorry, we're all out. We have ${Foods.length} left`)


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
