import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import DemoImage1 from './intro-illustration_qneuer.svg';

import GridImg1 from './headp.png';
import GridImg2 from './stack.png';
import GridImg3 from './email.png';


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '10%',
    flexGrow: 1,
  },
  div1: {
    paddingLeft: '5%',
  },
  div2: {
    paddingRight: '10%',
    paddingLeft: '10%',
    marginTop: '10%',
  },
  div3: {
    paddingRight: '3%',
    paddingLeft: '1%',
    marginTop: '10%',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

export default function Description() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container spacing={6} className={classes.div1}>
            <Grid item xs={6} style={{ marginTop: '4%' }}>
                <Typography variant="h2" gutterBottom align="left">
                    Image Annotation
                </Typography>
                <Typography variant="h6" gutterBottom align="left">
                    Data is the fuel to AI and for the same . . . . 
                    AI starts with quality data with good annotation, High quality training and validation data for AI applications
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <img src={DemoImage1} alt="DemoImage" style={{ maxWidth: '90%' }}></img>
            </Grid>
        </Grid>
        
        <Grid container spacing={6} className={classes.div2}>
            <Grid item xs={4}>
                <img src={GridImg1} alt="GridImage1" style={{ maxWidth: '25%', marginBottom: '20px' }}></img>
                <Typography variant="h6" gutterBottom>
                    Annotation - Let Edunomics bring the best of DATA Platform for AI
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <img src={GridImg2} alt="GridImage2" style={{ maxWidth: '25%', marginBottom: '20px' }}></img>
                <Typography variant="h6" gutterBottom>
                    Developed by the best brains of world with intent to make AI accessible                
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <img src={GridImg3} alt="GridImage3" style={{ maxWidth: '25%', marginBottom: '20px' }}></img>
                <Typography variant="h6" gutterBottom>
                    Our tool is always free for Academic research
                </Typography>
            </Grid>
        </Grid>
        
        <Grid container spacing={6} className={classes.div3}>
            <Grid item xs={6}>
                <img src={DemoImage1} alt="DemoImage" style={{ maxWidth: '90%' }}></img>
            </Grid>
            <Grid item xs={6} style={{ marginTop: '10%' }}>
                <Typography variant="h4" gutterBottom align="left">
                    Construct your Machine Learning pipeline with Powerful APIs
                </Typography>
                <Typography variant="h6" gutterBottom align="left">
                    Stream data into Labelbox and push labeled data into training environments. 
                    Connect your ML models to supercharge labeling productivity and orchestrate active learning. 
                    Labelbox is API-first so you can use it as infrastructure to scale up.                
                </Typography>
            </Grid>
        </Grid>
    </div>
  );
}
