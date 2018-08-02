import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import HomeReactRedux from './page/home/HomeReactRedux'; 

import NewsReactRedux from './page/news/NewsReactRedux';

import LoginReactRedux from './page/login/LoginReactRedux';

import NavRectRedux from './tpl/NavReactRducer';
import aboutReactRedux from './page/about/aboutReducer';
class App extends Component {
  render() {
    return (
      <div >
        <NavRectRedux/>
        <div>
				<Route exact path="/" component={LoginReactRedux}/>
				<Route exact path="/home" component={HomeReactRedux}/>
				<Route path="/about" component={aboutReactRedux}/>
				<Route path="/news" component={NewsReactRedux}/>
			</div>
      </div>
    );
  }
}

export default App;
