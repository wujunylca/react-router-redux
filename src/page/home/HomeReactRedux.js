import {connect} from 'react-redux';

import Home from './Home';

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) =>(
    {
        outLogin:(history) =>{
                dispatch({type:"OUT_LOGIN"})
                history.push('/')
                //this.props.history.push('/')  错误的方式

               // history 是通过 页面 this.props.history  传递过来的参数，直接使用会报错
        }
    }
)

let HomeReactRedux = connect(mapStateToProps,mapDispatchToProps)(Home);

export default HomeReactRedux;

