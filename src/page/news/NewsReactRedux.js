import { connect } from 'react-redux';
import News from './News';

const mapStateToProps = (state) => {
    return {
        list:state.NewsRedux.list,
        isLogin:state.isLogin
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
		sortreverse: () => dispatch({type:"SORT_REVERSE"})
		
	};
}

var NewsReactRedux = connect(mapStateToProps,mapDispatchToProps)(News);

export default NewsReactRedux;