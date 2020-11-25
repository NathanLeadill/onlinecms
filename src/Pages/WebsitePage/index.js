import { Grid, Typography } from '@material-ui/core';
import React from 'react';


export default function WebsitePage() {
    const content = JSON.parse(localStorage.getItem('website'));
    console.log(content);
    return (
        <Grid container>
            <Grid item xs={6}>
                <Typography variant="h4">Website Name:</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h5">{content.websiteName}</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h4">Interview Link:</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h5">{content.interviewLink}</Typography>
            </Grid>
        </Grid>
    )
}