import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';

class Finished extends Component { 
  // I have tried many thing and nothing will show up on the page.
  // this page is no different than ant of the others. I cannot figure it out.  
    render(){
        return(
            <Card>
                <CardContent>
                    <Typography>
                        Hey
                    </Typography>
                </CardContent>
            </Card>
        )
    }




} // end of class component 
export default Finished;