import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { Typography, CardActions } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedbackFinished: false,
        }
    }


    // sends used to the finished page
    updateFinish = (event) => {
        this.setState({
            commentStatus: '',
            setFeedback: true
        })
        this.props.history.push('/finished');
    }

    onSubmit = () => {
        axios
    }
 



    render() {
  
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
                        <Button onClick={this.updateFinish} 
                                variant="contained"
                                color="secondary"
                                onChange=
                                disabled ={!this.props.reduxStore.setFeedback}>
                            Submit
                </Button>
                    </CardActions>
                </CardContent>
            </Card>

        ) //end return
    } // end render






}
const mapReduxStoreToProps = (reduxStore) => {
    return { reduxStore: reduxStore };
} //end class component
export default connect(mapReduxStoreToProps)(Results);