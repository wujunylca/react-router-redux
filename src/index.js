import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import rootRedux from "./rootRedux";

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store =createStore(rootRedux);

ReactDOM.render(
    <Provider store={store} >
        <Router>
            <App />
        </Router> 
    </Provider>

,
 document.getElementById('root'));
registerServiceWorker();
