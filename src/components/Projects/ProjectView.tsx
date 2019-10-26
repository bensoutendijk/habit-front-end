import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { Grid, makeStyles, createStyles, Theme, Typography, Button, Paper, Link as MuiLink, ListItem, List } from '@material-ui/core';
import { AppState } from '../../store';
import { fetchProject } from '../../store/projects/actions';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    minHeight: '500px',
  },
  streamHero: {
    display: 'flex',
    padding: theme.spacing(4)
  },
  serviceImage: {
    maxHeight: '50px',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
  recentStreamsCard: {
    display: 'flex',
    padding: theme.spacing(4)
  },
}));

const ProjectView: React.FC<ServiceViewProps> = (props) => {
  const { match: { params: { projectId } } } = props
  const project = useSelector((state: AppState) => state.projects.byId[projectId]);
  const classes = useStyles({});
  const dispatch = useDispatch();

  useEffect(() => {
    const getProject = async (projectId: string) => {
      await dispatch(fetchProject(projectId));
    }

    getProject(projectId);
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <Grid container spacing={4}>
            <Grid item md={8}>
              <Paper className={classes.streamHero}>
                <Grid container direction="column">
                  <Grid item>
                    <Grid container>
                      <Grid item md={8}>
                        <Grid container direction="column" spacing={2}>
                          <Grid item>
                            {project ? (
                              <Typography variant="h6">{project.name}</Typography>
                            ) : (
                              <Typography variant="h6">...</Typography>
                            )}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Button variant="contained">Project Settings</Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={4}>
            <Grid item md={6}>
              <Paper className={classes.recentStreamsCard}>
                <Grid container direction="column">
                  <Typography variant="h6">Recent Changes</Typography>
                </Grid>
              </Paper>
            </Grid>
            <Grid item md={6}>
              <Paper>

              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

interface ServiceViewProps extends RouteComponentProps<{projectId: string}> {
  
}

export default ProjectView;