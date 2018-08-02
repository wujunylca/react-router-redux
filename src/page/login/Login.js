import React,{Component} from 'react';

class Login extends Component{
    constructor(){
        super();
        this.goLogin = this.goLogin.bind(this);
    }
   componentDidMount(){
      
   }
   goLogin = () => {
       const  { history } = this.props;
       const { username,password } = this.refs;
       if( !username.value ) {
           return alert("用户名不能为空") ; 
       }
       if( !password.value){
           return alert("密码不能为空")
       }
       this.props.gologin(username.value,password.value,history)
    }
    render(){
        return(
            <div>
                <h3>登录页面</h3>
                <div>用户名:<input type='text' ref="username"  /></div>
                <div> 
                    <span style={{marginLeft:"15px"}} > 密码:</span>
                    <input style={{marginLeft:"1px"}} type='password' ref="password" />
                </div>
                <div>
                    <button onClick={this.goLogin.bind(this)}>登录</button>
                </div>
            </div>
        )
    }
}

export default Login;