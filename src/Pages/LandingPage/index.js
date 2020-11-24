
import React from 'react';
import NavBar from '../../Components/NavBar'
import SideBar from '../../Components/SideBar';
import Constants from '../../Constants/index'
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, Paper } from '@material-ui/core';

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

  },
}));
/**
 * I know i used some main and div classes here but i need to to ensure the page is layed iout properly its the standard practice.
 */
export default function LandingPage() {
    const classes = useStyles(); 
    return (
        <div className={classes.root}>
            <CssBaseline />
            <NavBar />
            <SideBar />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Paper className={classes.contentContainer}>
                    Hello
                </Paper>
            </main>
           
        </div>
        )
}