import React from "react";
import { Component } from 'react';
import { connect } from 'react-redux';

class BowDisplay extends Component{

    render(){
        if(!this.props.selectedBow || this.props.selectedBow.name === 'Choose a bow'){
            return <div><p>Please choose a bow</p><p></p><p><p></p></p></div>
        }
        
        return( 
            <div>
                <table>
                    <tr>
                        <td>
                            <div className = 'left'>
                                <img src={this.props.selectedBow.picture} />
                            </div>
                        </td> 
                        <td>
                        <p>{this.props.selectedBow.description}</p>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        selectedBow: state.selectBow
    }
}

export default connect(mapStateToProps)(BowDisplay);