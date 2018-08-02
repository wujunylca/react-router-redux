import { connect } from 'react-redux';

import Login from "./Login";

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => (
    {
        gologin:(username,password,history) =>{
            console.log("用户名",username);
            console.log("密码",password);
            setTimeout(()=>{
                dispatch({type:"Go_LOGIN"})
                history.push('/home')
            },1000)
        }
    }
)
let LoginReactRedux = connect(mapStateToProps,mapDispatchToProps)(Login);

export default  LoginReactRedux;