import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { selectBow } from '../actions/index';
import {bindActionCreators} from 'redux';
import BowDisplay from '../containers/bowDisplay';

class UserInput extends Component{

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    createListItems(){
        return this.props.listOfBows.map((bow) =>{
            return(
                <option key = {bow.id} value = {bow.name}>{bow.name}</option>
            )
        });
    }

    handleChange(event){
        var selectedBow = event.target.value;
        for(var i = 0; i < this.props.listOfBows.length; i++){
            if(this.props.listOfBows[i].name === selectedBow){
                this.props.selectBow(this.props.listOfBows[i]);
            }
        }
    }

    render(){
        return(
            <div>
                <select className = "dropdown" onChange = {this.handleChange}>{this.createListItems()}</select>
                <BowDisplay />
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        listOfBows: state.bows
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectBow: selectBow}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserInput);