import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { Typography, CardActions } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


class Comments extends Component {
    // this.state.commentStatus
    constructor(props) {
        super(props);
        this.state = {
            commentStatus: ' '
        }
    }

    // function to update comment status, not appended until click
    updateComment = (event) => {
        this.setState({
            commentStatus: event.target.value,
        })
    }
    // click handler to update comment to append on the Results
    clickToUpdateFSupport = (event) => {
        const action = {
            type: 'SET_COMMENT',
            payload: this.state.commentStatus,
        };
        this.props.dispatch(action);
        this.setState({
            commentStatus: '',
        })
        // this.props.history.push('/');
    }




    render() {
        
        return (
            <Card className="comment-container">
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
                        <Button className="comment-Next-btn" variant="contained" color="secondary" onClick={this.clickToUpdateFellings}>
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
export default connect(mapReduxStoreToProps)(Comments)