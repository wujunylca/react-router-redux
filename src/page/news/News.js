import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';

class News extends Component {
	
	constructor(props) {
		super(props);
		// 设置 initial state
		this.state={}
	}
	
	render() {
		if(this.props.isLogin === false){
			return <Redirect to="/" />
		}
		return (
			<div>
				<h3>新闻页面</h3>
				<ul>
					{
					this.props.list.map((item,i)=>(
						<li key={item.id}>
							<a>{item.title}</a>
							<span>{item.con}</span>
						</li>
					))
					
					}
						<button onClick={this.props.sortreverse.bind(this)}>反向显示</button>
				</ul>
			</div>
		);
	}
	
	componentDidMount() {
	  	console.log("News渲染完毕")
	}
	
}


export default News
