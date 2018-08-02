import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

//=====组件=====

class About extends Component {
	
	render() {
		if(this.props.isLogin === false){
			return <Redirect to="/" />
		}
		return (
			<div>
				<h3>关于我们</h3>
			</div>
		);
	}
	
	componentDidMount() {
	  	console.log("About渲染完毕")
	}
	
}


export default About