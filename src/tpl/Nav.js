import React,{Component} from 'react';

import {Link} from 'react-router-dom';

class Nav extends Component {
    render () {
        
        console.log("nav",this.props.isLogin);

        return (
            <ul style={{display:this.props.isLogin?"block":"none"}}>
                <li style={{display:!this.props.isLogin?"block":"none"}} >
                    <Link to="/">登录</Link>
                </li>
                <li>
					  <Link to="/home">主页</Link>
				</li>
                <li>
                    <Link to="/about">关于我们</Link>
                </li>
                <li>
                    <Link to="/news">新闻页面</Link>
                </li>
        </ul>
        )
    }
}

export default Nav;