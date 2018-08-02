import { connect } from 'react-redux';

import Nav from './Nav';

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => ({
    
})

let NavRectRedux = connect(mapStateToProps,mapDispatchToProps)(Nav);

export default NavRectRedux;

