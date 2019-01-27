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
            feedbackFinished: true,
        }
    }

    // activateBtn = () => {
    //     const update = null;
    //     if (this.props.reduxStore.commentReducer.setFeedback === false) {
    //         update = <Button variant="contained" color="secondary" disabled className="Submit-btn">
    //             Submit
    //             </Button>
    //     } else if (this.props.reduxStore.commentReducer.setFeedback === true) {
    //         update = <Button variant="contained" color="secondary" onClick="updateFinish">
    //             Submit
    //             </Button>
    //     }
    // }
    // disabled button 
    disableBtn = () => {
        this.setState({ feedbackFinished: false });
        console.log('button disabled');
    }
    // submit button
    submitBtn = () => {
        this.setState({ feedbackFinished: true });
        console.log('Submit Btn on');
    }

    // sends used to the finished page
    updateFinish = (event) => {
        this.setState({
            commentStatus: '',
            setFeedback: true
        })
        this.props.history.push('/finished');
    }
    // // axios PUT request to update like status
    // updateStatus = () => {
    //     axios({
    //         method: 'PUT',
    //         url: `/gallery/like/${this.props.item.id}`,
    //     }).then((response) => {
    //         console.log('in PUT', response);
    //         this.props.getGalleryItem();
    //     }).catch((error) => {
    //         alert('error in PUT', error);
    //     })
    // }



    render() {
        //conditional rendering
        const update = null;
        if (this.props.reduxStore.commentReducer.setFeedback === false) {
            update = <Button variant="contained" color="secondary" disabled className="Submit-btn">
                Submit
                </Button>
        } else if (this.props.reduxStore.commentReducer.setFeedback === true) {
            update = <Button variant="contained" color="secondary" onClick="updateFinish">
                Submit
                </Button>
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
                        <Button onChange={update} variant="contained" color="secondary" disabled className="Submit-btn">
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