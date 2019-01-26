import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';

class Feelings extends Component {

    render() {
        return (
            <Card className="results-card">
            <CardContent>
                <Typography component="h2">
                    {/* Will be updated with input data */}                   
                <h2>Review Your FeedBack</h2>
                </Typography> 
                <Typography component="p">
                        Fellings: 
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
            </CardContent>
        </Card>

        )
     }


    }
export default Feelings;