import React, { Component } from 'react';
import { connect } from 'react-redux';
class UserRegistration extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }


    render() {
        return (
            <div className="text-center" >Tạo người dùng mới</div>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRegistration);
