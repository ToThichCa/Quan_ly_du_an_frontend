import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewUserService, deleteUserService, editUserService, getAllUsers } from '../../services/userService';
import { emitter } from "../../utils/emitter";
import ModalEditUser from './ModalEditUser';
import ModalUser from './ModalUser';
import './UserManage.scss';


class UserManage extends Component {

    constructor(props){
        super(props);
        this.state={
            arrUsers:[],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            userEdit:{}

        }
    }

    async componentDidMount() {
        await this.getAllUsersFromReact();
    }

    getAllUsersFromReact = async()=>{
        let response = await getAllUsers("ALL");
        // console.log('get all user:',response)
        if(response && response.errCode === 0){
            this.setState({
                arrUsers: response.users
                
            })
        }
    }

    handleAddNewUser = () =>{
        this.setState({
            isOpenModalUser: true,
        })

    }
    toggleUserModel = () =>{
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }
    toggleUserEditModel =()=>{
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser,
        })
    }
    createNewuser = async (data) =>{
        try{
            let response = await createNewUserService(data);
            if(response && response.errCode !==0){
                alert(response.errMessage)
            }else{
                await this.getAllUsersFromReact();
                this.setState({
                    isOpenModalUser: false
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }

        }catch(e){
            console.log(e);
        }
    }

    handleDeleteUser = async (user)=>{
        try{
            let res = await deleteUserService(user.id);
            if(res && res.errCode ===0){
                await this.getAllUsersFromReact();
            }else{
                alert(res.errMessage)
            }
        }catch(e){

        }
    }

    handleEditUser =(user) => {
        console.log(user)
        this.setState({
            isOpenModalEditUser: true,
            userEdit: user
        })
    }
    doEditUser = async (user)=>{
        try{
            let res = await editUserService(user);
            if(res && res.errCode === 0){
                this.setState({
                    isOpenModalEditUser: false
                })
                await this.getAllUsersFromReact()
            }else{
                alert(res.errMessage)
            }
        }catch(e){
            console.log(e)

        }
        

    }

    render() {
        // console.log(this.state)
        // console.log('check render', this.state)
        let arrUsers = this.state.arrUsers;
        return (
            <div className="users-container">
                <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent ={this.toggleUserModel}
                    createNewuser ={this.createNewuser}
                    
                />
                {
                this.state.isOpenModalEditUser &&
                <ModalEditUser
                    isOpen={this.state.isOpenModalEditUser}
                    toggleFromParent ={this.toggleUserEditModel}
                    currentUser={this.state.userEdit}
                    editUser ={this.doEditUser}
                />
                }
            <div className="title text-center mt-4">Quản lý người dùng</div>
            <div className=" mx-1 ">
                <button
                className="btn btn-primary px-5" 
                onClick={()=> this.handleAddNewUser()}>Tạo người dùng mới 
                </button>
            </div>
            
            <div className="user-table mt-4 mx-2">
                <table id="customers">
                    <tbody>
                    <tr>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                    
                    {arrUsers && arrUsers.map((item, index) => {
                        // console.log('dtaa', item, index)
                        return(
                            <tr key={index}>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                <td>
                                    <button className="btn-edit" onClick={()=>this.handleEditUser(item)} ><i className="fas fa-pencil-alt"></i></button>
                                    <button className="btn-delete" onClick={()=>this.handleDeleteUser(item)}><i className="fas fa-trash-alt"></i></button>

                                </td>
                            </tr>
                                                )
                                            })
                                }
                    </tbody>

                    
                    </table>
                    </div>
                </div>
                            );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
