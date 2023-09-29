import { push } from "connected-react-router";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleLoginApi } from "../../services/userService";
import * as actions from "../../store/actions";
import './Login.scss';


class Login extends Component {
    constructor(props) { //hàm tạo
        super(props);//
        this.state ={
            username:'',
            password:'',
            isShowPassword:false,
            errMessage:''
        }
    }
handleOnChangeUsename=(event)=>{
    this.setState({
        username: event.target.value
    })

}

handleOnChangePassword=(event)=>{
    this.setState({
        password: event.target.value
    })
}

handleLogin = async() => {
    this.setState({
        errMessage:''
    })
    try{
        let data = await handleLoginApi(this.state.username, this.state.password);
        if(data && data.errCode !==0){
            this.setState({
                errMessage:data.message
            })
        }
        if(data && data.errCode == 0){
            console.log(data.user)
            this.props.userLoginSuccess(data.user)

        }
    }catch(error){
        if(error.response){
            if(error.response.data){
                this.setState({
                    errMessage:error.response.data.message
                })
            }
        }

        
    }
    
    
    // console.log('username: ', this.state.username, 'password:', this.state.password)
    // console.log('allstate:', this.state)
}

handleShowHidePassword=()=>{
    this.setState({
        isShowPassword: !this.state.isShowPassword
    })
}

    render() {
        return(
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className="col-12 login-text">Login</div>
                        <div className="col-12 from-group login-input">
                            <label className="username-text">Username:</label>
                            <input type="text"
                            className="from-control"
                            placeholder="Nhập Usename của bạn"
                            value={this.state.username}
                            onChange={(event)=>{this.handleOnChangeUsename(event)}}/>
                        </div>
                        <div className="col-12 from-group login-input">
                            <label className="password-text" >Password:</label>
                            <input type="password"
                            className="from-control"
                            placeholder="Nhập mật khẩu của bạn"
                            value={this.state.password}
                            onChange={(event)=>this.handleOnChangePassword(event)}
                            />
                            
                        </div>
                        <div className="col-12" style={{color: 'red'}}>
                            {this.state.errMessage}
                        </div>
                        <div className="col-12 ">
                            <button className="btn-login" onClick={()=>{this.handleLogin()}}>Login</button>
                        </div>
                        
                        <div className="col-12">
                            <span>Forgot your password ?</span>
                        </div>
                        <div className="col-12 social-login">
                        <i className="fab fa-google-plus-g google"></i>
                        <i className="fab fa-facebook-f facebook"></i>
                        <i className="fab fa-twitter twitter"></i>
                        </div>
                    </div>
                </div>

            </div>
        )

            
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
       // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess:(userInfo)=> dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
