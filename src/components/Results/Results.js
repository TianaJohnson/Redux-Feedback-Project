import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import { Typography, CardActions } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

class Results extends Component {


    render() {
        return (
            <Card className="results-card">
                <CardContent>
                    <Typography component="h2">
                        {/* Will be updated with input data */}
                    <h2>Review Your FeedBack</h2>
                    </Typography>
                    <Typography component="p">
                            Fellings: {this.props.reduxStore.feelingsReducer}
                            </Typography>  
                            <Typography component="p">
                            Understanding:                           
                            </Typography>  
                            <Typography component="p"> 
                            Support:   
                            </Typography> 
                            <Typography component="p">
                            Comments:  
                            </Typography> 
                            <br/>
                            <CardActions style={{justifyContent: 'center'}}>
                            <Button variant="contained" color="secondary" disabled className="Submit-btn">
                            Submit
                            </Button>
                        </CardActions>
                </CardContent>
            </Card>

        ) //end retuen
    } // end render





}
    const mapReduxStoreToProps = (reduxStore) => {
        return { reduxStore: reduxStore };
    } //end class component
export default connect(mapReduxStoreToProps)(Results);