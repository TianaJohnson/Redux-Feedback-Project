import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Card from '@material-ui/core/Card';
// import { Typography } from '@material-ui/core';
// import CardContent from '@material-ui/core/CardContent';

class Feelings extends Component {
    // this.state.feelingStatus
    constructor(props){
        super(props);
        this.state = {
            feelingsStatus: 0 
        }
    }

    // function to pudate feelings status, not appended until click
    updateFeelings = (event) => {
        this.setState({
            feelingsStatus: event.target.value,
        })
    }
    // click handler to update feelings to append on the Results
    clickToUpdateFellings = (event) => {
        const action = { type: 'SET_FEELINGS',
                        payload: this.state.feelingsStatus,
                    };
                    this.props.dispatch(action);
                    this.setState({ 
                    feelingsStatus: '',
                })
                this.props.history.push('/');
    }




    render() {
        return (
            <form onSubmit={this.clickToUpdateFellings}>
             <input onChange={this.updateFeelings} type="number"/> 
                <br />
                <input type="submit" value="Next" />
            </form>
        )
     }


    }
    const mapReduxStoreToProps = (reduxStore) => {
        return { reduxStore: reduxStore };
    } //end class component
export default connect(mapReduxStoreToProps)(Feelings)