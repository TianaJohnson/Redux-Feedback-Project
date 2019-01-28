import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { Typography, CardActions } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Results from './../Results/Results.js';


class Support extends Component {
    // this.state.understandingStatus
    constructor(props) {
        super(props);
        this.state = {
            supportStatus: 0
        }
    }

    // function to update support status, not appended until click
    updateSupport = (event) => {
        this.setState({
            supportStatus: event.target.value,
        })
    }
    // click handler to update support to append on the Results by sending it to the store.
    clickToUpdateSupport = (event) => {
        const action = {
            type: 'SET_SUPPORT',
            payload: this.state.supportStatus,
        };
        this.props.dispatch(action);
        this.setState({
            supportStatus: '',
        })
        this.props.history.push('/comments');
    }




    render() {
        
        return (
            <Card className="support-container">
            <Card>
                <CardContent>
                    <Typography>                  
                        <h2>How well do you feel supported?</h2>
                    </Typography>
                    <br/>
                    <Typography>
                        <input onChange={this.updateSupport} type="number"></input>
                    </Typography>
                    <br/>
                    <br/>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button className="support-Next-btn" variant="contained" color="secondary" onClick={this.clickToUpdateSupport}>
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
export default connect(mapReduxStoreToProps)(Support)