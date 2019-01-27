import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { Typography, CardActions } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import axios from 'axios';


class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            finalFeedback: {
                feelings: 0,
                understanding: 0,
                support: 0,
                comments: '',
                finished: false
            }

        }
    }

    // conditionally rendering the submit btn
    // btnConditional = () => {
    //     const outPut = null;
    // if( this.props.reduxStore.setFeedback === false) {
    //     output = <Button onClick={this.updateFinish} 
    //             variant="contained"
    //             color="secondary"
    //             disabled = {!this.props.reduxStore.setFeedback}>
    //             Incomplete
    //             </Button> 
    // } else if ( this.props.reduxStore.setFeedback === true) {
    //     output = <Button variant="contained"
    //             color="primary" >
    //             Submit
    //              </Button>
    // }
    // }
    // sends used to the finished page
    updateFinish = (event) => {
        this.setState({
            finalFeedback: {
                feelings: this.props.reduxStore.feelingsReducer,
                understanding: this.props.reduxStore.understandingReducer,
                support: this.props.reduxStore.supportReducer,
                comments: this.props.reduxStore.commentReducer,
                finished: true
            }
        })
        this.props.history.push('/finished');
    }


    onSubmit = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                finalFeedback: {
                    feelings: this.props.reduxStore.feelingsReducer,
                    understanding: this.props.reduxStore.understandingReducer,
                    support: this.props.reduxStore.supportReducer,
                    comments: this.props.reduxStore.commentReducer,
                    finished: true
            }
            }
          }).then(function(response){
            console.log(response);
          }).catch((error) => {
            console.log('server error for axios POST', error);
          })
        }

        
        // image is displayed 
        // btnOn = () => {
        //     this.setState({ isClicked: false });
        //     console.log('image on');
        // }
        // description is displayed
        // btnOff = () => {
        //     this.setState({ isClicked: true });
        //     console.log('caption on');

        // }





render() {
    let outPut;
    if (this.props.reduxStore.setFeedback === false) {
        outPut = (<Button 
                        variant="contained"
                        color="secondary"
                        disabled={!this.props.reduxStore.setFeedback}>
                        Incomplete
                </Button>)
    } else if (this.props.reduxStore.setFeedback === true) {
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
                    {JSON.stringify(this.props.reduxStore.commentReducer.setFeedback)}
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