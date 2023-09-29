import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';
import Navigator from '../../components/Navigator';
import * as actions from "../../store/actions";
import './Header.scss';
import { adminMenu } from './menuApp';

class Header extends Component {

    render() {
        const { processLogout, userInfo } = this.props;

        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>
                <div className="languages">
                    <span className="welcome">
                        <FormattedMessage id="homeheader.welcome"/>
                        {userInfo && userInfo.firstName ? userInfo.firstName : ''} !
                    </span>
                </div>
                {/* nút logout */}
                <div className="btn btn-logout" onClick={processLogout} title="Đăng xuất">
                    <i className="fas fa-sign-out-alt"></i>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn:state.user.isLoggedIn,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
