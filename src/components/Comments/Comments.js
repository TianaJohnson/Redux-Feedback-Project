import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { Typography, CardActions } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Results from './../Results/Results.js';

class Comments extends Component {
    // this.state.commentStatus
    constructor(props) {
        super(props);
        this.state = {
            setComment: ' ',
            setFeedback: false
        
    }
}

    

    // function to update comment status, not appended until click
    clickToUpdateComment = (event) => {
        let payload = {};
        payload.setComment = this.state.setComment;
        payload.setFeedback = this.state.setFeedback;

        const commentAction = {
            type: 'SET_COMMENT',
            payload: payload.setComment,                    
        };
        const feedbackAction = {
            type: 'SET_FEEDBACK',
            payload: payload.setFeedback,                    
        };
        this.props.dispatch(commentAction);
        this.props.dispatch(feedbackAction);
        this.setState({
            setComment: '',
            setFeedback: true,
        })
        this.props.history.push('/results');
    }


    updateComment = (event) => {
        this.setState({
            setComment: event.target.value,
            setFeedback: true
        })
    }

   




    render() {
        
        return (
            <Card className="comment-container">
            <Card>
                <CardContent>
                    <Typography>                  
                        <h2>Any comments you would like to leave?</h2>
                    </Typography>
                    <br/>
                    <Typography>
                        comments
                        <input onChange={this.updateComment} type="text"></input>
                    </Typography>
                    <br/>
                    <br/>
                    <CardActions style={{justifyContent: 'center'}}>
                        <Button className="comment-Next-btn"
                                variant="contained" 
                                color="secondary" 
                                onClick={this.clickToUpdateComment}>
                            Next
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
            <Results/>
            </Card>
            
        )
    }
    

} //end class component
const mapReduxStoreToProps = (reduxStore) => {
    return { reduxStore: reduxStore };
}
export default connect(mapReduxStoreToProps)(Comments)