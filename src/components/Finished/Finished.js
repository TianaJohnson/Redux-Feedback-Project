import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Card from '@material-ui/core/Card';
// import { Typography, CardActions } from '@material-ui/core';
// import CardContent from '@material-ui/core/CardContent';

class Comments extends Component { 

    render(){
        return(
            <box>
                <h1>Thanks You.</h1>
            </box>

        )
    }




} // end of class component 
const mapReduxStoreToProps = (reduxStore) => {
    return { reduxStore: reduxStore };
} //end class component
export default connect(mapReduxStoreToProps)(Comments)