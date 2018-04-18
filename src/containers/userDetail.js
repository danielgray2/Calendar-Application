import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component{
    render(){
        if(!this.props.user){
            return(<h4>Select a user</h4>)
        }
        return(
            <div>
                Last name: {this.props.user.lastName}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetail);