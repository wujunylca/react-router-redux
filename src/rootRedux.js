import { combineReducers } from 'redux';
import isLogin from './LoginRedux';
import NewsRedux from './page/news/newsRedux';
var rootRedux = combineReducers({
    isLogin,
    NewsRedux
});

export default rootRedux;