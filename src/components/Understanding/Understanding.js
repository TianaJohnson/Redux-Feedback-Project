import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { Typography, CardActions } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


class Understanding extends Component {
    // this.state.understandingStatus
    constructor(props) {
        super(props);
        this.state = {
            UnderstandingStatus: 0
        }
    }

    // function to pudate understanding status, not appended until click
    updateUnderstanding = (event) => {
        this.setState({
            understandingStatus: event.target.value,
        })
    }
    // click handler to update understanding to append on the Results
    clickToUpdateUnderstanding = (event) => {
        const action = {
            type: 'SET_UNDERSTANDING',
            payload: this.state.understandingStatus,
        };
        this.props.dispatch(action);
        this.setState({
            understandingStatus: '',
        })
        this.props.history.push('/support');
    }




    render() {
        
        return (
            <Card className="understanding-container">
                <CardContent>
                    <Typography>                  
                        <h2>How well are you understanding the material?</h2>
                    </Typography>
                    <br/>
                    <Typography>
                        <input onChange={this.updateUnderstanding} type="number"></input>
                    </Typography>
                    <br/>
                    <br/>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button className="understanding-Next-btn" variant="contained" color="secondary" onClick={this.clickToUpdateUnderstanding}>
                            Next
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
        )
    }


}
const mapReduxStoreToProps = (reduxStore) => {
    return { reduxStore: reduxStore };
} //end class component
export default connect(mapReduxStoreToProps)(Understanding)