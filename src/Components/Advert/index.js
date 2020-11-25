import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    advertImage: {
        width: '80%',
        margin: '0 auto',
        textAlign: 'center'
    }
  }));
export default function Advert(props) {
    const classes = useStyles();
    return (    
        <img className={classes.advertImage} src={props.img} />
    )
}