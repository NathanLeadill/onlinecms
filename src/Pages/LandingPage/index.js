
import React, { useEffect, useState } from 'react';
import Constants from '../../Constants/index'
import { makeStyles } from "@material-ui/core/styles";
import { Button, CssBaseline, Grid, List, ListItem, Paper, TextField, Typography } from '@material-ui/core';

import * as website from '../../website.json'
import { LockTwoTone } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
  },
  toolbar: {
    minHeight: '0px',
  },
  content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    contentContainer: {
        marginLeft: Constants.drawerWidth,
        backgroundColor:' #fafafa',
        boxShadow: 'none',
  },
    welcomeTitle: {
        padding: '15px',
    },
    headingContainer: {
        padding: '15px'
    },
    formMargin: {
        margin: '10px 0, 10px, 0',
        padding: '20px 0 20px 0',
    },
    formInputText: {
        width: '100%',
    }
}));
/**
 * I know i used some main and div classes here but i need to to ensure the page is layed iout properly its the standard practice.
 */
export default function LandingPage() {
    const content =  website.default;
    console.log(content);
    const classes = useStyles(); 
    const history = useHistory();

    const [websiteName, setWebsiteName] = useState();
    const [interviewLink, setInterviewLink] = useState();
    const handleSetWebsite = () => {
        const test = {
            websiteName,
            interviewLink,
        }

        localStorage.setItem('website', JSON.stringify(test))
    }


    const handlePreview = () => {
        history.push('/website')
    }
    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <Paper className={classes.headingContainer}>
                    <Grid container>
                        <Grid item xs={12} >
                            <Typography variant="subtitle2">Please change your site how you see feel</Typography>
                        </Grid>
                    </Grid>
                    <Grid container >
                        <Grid item xs={12} className={classes.formMargin}>
                            <TextField
                            id="outlined-helperText"
                            label="Website Name"
                            defaultValue={content.websiteName}
                            helperText="This will be the top logo"
                            variant="outlined"
                            value={websiteName}
                            className={classes.formInputText}
                            onChange={(e) => setWebsiteName(e.target.value)}

                            />
                        </Grid>
                        <Grid item xs={12} className={classes.formMargin}>
                            <TextField
                            id="outlined-helperText"
                            label="Video Link"
                            defaultValue={content.interviewLink}
                            helperText="This will be the video link for everyone to join"
                            variant="outlined"
                            className={classes.formInputText}
                            onChange={(e) => setInterviewLink(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6}>
                            <Button onClick={handleSetWebsite}>Save</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button onClick={handlePreview}>Preview</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </main>
           
        </div>
        )
}