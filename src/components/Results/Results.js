import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { Typography, CardActions } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import axios from 'axios';
// import Finished from './../Finished/Finished.js';

// state set to all variables so I can send it through axios 
class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
                feeling: 0,
                understanding: 0,
                support: 0,
                comments: '',
                finished: false
            }
        }
        
    

    // sends used to the finished page
    updateFinish = (event) => {
        console.log( 'axios Post')
        let feedBack = {
                feeling: this.props.reduxStore.feelingsReducer,
                understanding: this.props.reduxStore.understandingReducer,
                support: this.props.reduxStore.supportReducer,
                comments:this.props.reduxStore.commentReducer
        };
        console.log('axios2')
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedBack
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log('server error for axios POST', error);
        })
        this.props.history.push('/finished');
    }

    render() {
        // conditional rendering to update button status
        let outPut;
        if (this.props.reduxStore.feedbackReducer === false) {
            outPut = (<Button
                variant="contained"
                color="secondary"
                disabled>
                Incomplete
                </Button>)
        } else if (this.props.reduxStore.feedbackReducer === true) {
            outPut = (<Button variant="contained"
                onClick={this.updateFinish}
                color="primary" >
                Submit
                     </Button>)
        }
    
        return (
            <Card className="results-card">
                <CardContent>
                    <Typography component="h2">
                        <h2>Review Your FeedBack</h2>
                    </Typography>
                    <Typography component="p">
                        Fellings: {this.props.reduxStore.feelingsReducer}
                    </Typography>
                    <Typography component="p">
                        Understanding: {this.props.reduxStore.understandingReducer}
                    </Typography>
                    <Typography component="p">
                        Support: {this.props.reduxStore.supportReducer}
                    </Typography>
                    <Typography component="p">
                        Comments: {this.props.reduxStore.commentReducer}
                    </Typography>
                    <br />
                    <CardActions style={{ justifyContent: 'center' }}>
                        {outPut}
                    </CardActions>
                </CardContent>
            </Card>

        ) //end return
    } // end render






}//end class component
const mapReduxStoreToProps = (reduxStore) => {
    return { reduxStore: reduxStore };
}
export default connect(mapReduxStoreToProps)(Results);