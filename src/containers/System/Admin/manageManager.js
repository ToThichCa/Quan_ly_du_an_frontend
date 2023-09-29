import React, { Component } from 'react';
import { connect } from 'react-redux';
class manageManager extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }


    render() {
        return (
            <div className="text-center">
                <div className="title">
                   Quản lý Manager
                </div>
            </div>
        
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

export default connect(mapStateToProps, mapDispatchToProps)(manageManager);
