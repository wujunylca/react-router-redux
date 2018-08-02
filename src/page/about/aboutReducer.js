import {connect} from 'react-redux';

import About from './About';

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) =>(
   {}
)

let aboutReactRedux = connect(mapStateToProps,mapDispatchToProps)(About);

export default aboutReactRedux;

