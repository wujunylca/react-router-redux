var isLogin =false;

const loginRedux = (state=isLogin,action) => {
    switch(action.type){
        case "Go_LOGIN":
            return true;
        case "OUT_LOGIN":
            return false;
        default:
            return state;
    }
}

export default loginRedux;
