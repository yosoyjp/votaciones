// @flow
import React from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';

import backLogin from '../../components/media/backLogin-min.jpg';
import Registraduria from '../../components/media/Registraduria.logo.svg-min.png';
import Colombia from '../../components/media/Colombia.svg-min.png';
import './login.css'

type Props = {
    isLogin: boolean,
    history: any
}

// $FlowFixMe



class Login extends React.Component<Props, {}>{

    componentWillMount(){
        if(this.props.isLogin){
            this.props.history.push("/prescidente")
        }
    }
    render(){
        return(
            <div id="container-login" >
                <img src={backLogin} alt="" id="fondoLogin" />
                <div className="son-login son-login-left ">
                    <img src={Registraduria} alt=""/>
                    <img src={Colombia} alt=""/>
                </div>
                <div className="son-login son-login-right "></div>
            </div>
        );
    }
}

function mapStateToProps(state: any){
    return {
        isLogin: state.login.isLogin
    }
}

export default connect(mapStateToProps)(withRouter(Login));