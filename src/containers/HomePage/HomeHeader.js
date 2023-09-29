import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo2 from '../../assets/logo2.png';
import './HomeHeader.scss';
class HomeHeader extends Component {

    render() {


        return (
            <div className="home-header-container">
                <div className="home-header-content">
                    <div className="left-content">
                        <i className="fas fa-bars"></i>
                        <img className="header-logo" src={logo2}/>
                    </div>
                    <div className="center-content">
                        <div className="chill-content">
                            <div><b>Lịch</b></div>
                        </div>
                        <div className="child-content">
                            <div><b>Nhân sự</b></div>
                        </div>
                        <div className="child-content">
                            <div><b>Chấm công</b></div>
                        </div>
                        <div className="child-content">
                            <div><b>KPI</b></div>
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="support"><i className="fas fa-question-circle"></i> Hỗ trợ </div>
                    </div>
                </div>
                
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn:state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
