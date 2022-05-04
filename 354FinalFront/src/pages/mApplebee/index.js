import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import { actionCreators as grainActionCreators } from './store';
import { actionCreators as flashActionCreators } from '../flash/store';
import App from "./App";

class Abee extends Component {
    render(){
        return <App {...this.props}/>
    };
};

const mapStateToProps = state => {
    return{
        abeeData: state.Abee
    };
};

const mapDispatchToProps = dispatch => {
    return{
        //grainFn: bindActionCreators(grainActionCreators, dispatch),
        flashFn: bindActionCreators(flashActionCreators, dispatch)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Abee);