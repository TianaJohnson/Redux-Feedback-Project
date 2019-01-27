import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { Typography, CardActions } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Results from './../Results/Results.js';

class Feelings extends Component {
    // this.state.feelingStatus
    constructor(props) {
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
        const action = {
            type: 'SET_FEELINGS',
            payload: this.state.feelingsStatus,
        };
        this.props.dispatch(action);
        this.setState({
            feelingsStatus: '',
        })
        this.props.history.push('/understanding');
    }




    render() {
        
        return (
            <Card>
            <Card className="feelings-container">
                <CardContent>
                    <Typography>                  
                        <h2>How are you feeling?</h2>
                    </Typography>
                    <br/>
                    <Typography>
                        <input onChange={this.updateFeelings} type="number"></input>    
                    </Typography>
                    <br/>
                    <br/>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button className="fellings-Next-btn" variant="contained" color="secondary" onClick={this.clickToUpdateFellings}>
                            Next
                        </Button>
                    </CardActions>
                </CardContent>
                </Card>
                <Results/>
                </Card>


        
        )
    }


}
const mapReduxStoreToProps = (reduxStore) => {
    return { reduxStore: reduxStore };
} //end class component
export default connect(mapReduxStoreToProps)(Feelings)