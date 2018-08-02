import React, { Component } from 'react';

import {Redirect} from 'react-router-dom';

//=====组件=====

class Home extends Component {
	handleOutLogin = () =>{
		const { history,outLogin } = this.props;
		outLogin(history);
	}

	render() {
		if(this.props.isLogin === false){
			return <Redirect to="/" />
		}
		return (
			<div>
				<h3>主页</h3>

				<div>
					<button onClick={this.handleOutLogin}>退出登录</button>
				</div>
			</div>
		);
	}
	
}


export default Home