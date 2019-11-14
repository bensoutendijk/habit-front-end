import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Grid, makeStyles, createStyles, Theme, Typography, ButtonBase, Button, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    minHeight: '500px',
  },
  header: {
    padding: theme.spacing(4)
  },
  service: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    padding: theme.spacing(2),
    
  },
  serviceButtonBase: {
    "&:hover": {
      backgroundColor: '#c2c2c2'
    },
    '&:nth-child(even)': {
      "&:hover": {
        backgroundColor: '#c2c2c2'
      },
      backgroundColor: '#f2f2f2',
    }
  },
  serviceImage: {
    maxHeight: '50px',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  }
}));

const ProjectNew: React.FC = () => {
  const classes = useStyles({});

  const [github, setGithub] = useState(false);

  return (
    <div className={classes.root}>
      <Paper>
        <Grid container direction="column">
          <Grid item>
            <Grid className={classes.header} container justify="space-between">
              <Grid item>
                <Button
                  color="secondary"
                  variant="contained"
                  component={Link}
                  to="/projects"
                >
                  Back
                </Button>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              {github ? (
                <ButtonBase to="/" component={Link} className={classes.serviceButtonBase}>
                  <Grid className={classes.service} item>
                    <Typography variant="h6">Docs From Repo</Typography>
                  </Grid>  
                </ButtonBase>
              ) : (
                <ButtonBase href="/api/auth/github/login" className={classes.serviceButtonBase}>
                  <Grid className={classes.service} item>
                    <Typography variant="h6">Connect to Github</Typography>
                  </Grid>  
                </ButtonBase>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default ProjectNew;