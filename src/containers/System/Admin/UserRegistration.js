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
            <><div className="text-center">
                <div className="title">
                    Tạo người dùng mới
                </div>
            </div>
            <div className="user-register">
                    <div className="container">
                        <div className="row">
                            <div className="col-12"> Thêm mới người dùng</div>
                            <div className="col-3">
                                <label> Email </label>
                                <input className="from-control" type ="email"></input>
                            </div>
                            <div className="col-3">
                                <label> Mật khẩu </label>
                                <input className="from-control" type ="password"></input>
                            </div>
                            <div className="col-3">
                                <label> Họ </label>
                                <input className="from-control" type ="text"></input>
                            </div>
                            <div className="col-3">
                                <label> Tên </label>
                                <input className="from-control" type ="text"></input>
                            </div>
                            <div className="col-3">
                                <label> Số điện thoại </label>
                                <input className="from-control" type ="text"></input>
                            </div>
                            <div className="col-9">
                                <label>Địa chỉ </label>
                                <input className="from-control" type ="text"></input>
                            </div>
                            <div className="col-5">
                                <label>Giới tính </label>
                                <select className="from-control">
                                    <option selected> Chọn...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="col-5">
                                <label>Chức vụ </label>
                                <select className="from-control">
                                    <option selected> Chọn... </option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="col-5">
                                <label>RoleID </label>
                                <select className="from-control">
                                    <option selected> Chọn... </option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="col-5">
                                <label>Ảnh chân dung </label>
                                <input type ="text" className="from-control"></input>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary"> Lưu</button>
                            </div>
                     
                        
                        </div>
                </div>
            </div></>
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
