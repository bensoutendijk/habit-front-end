import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { Grid, makeStyles, createStyles, Theme, Typography, Button, Paper, Link as MuiLink, ListItem, List } from '@material-ui/core';
import { fetchService } from '../../store/services/actions';
import { selectUserByUsername } from '../../selectors';
import { IService } from '../../store/services/types';

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
  streamDateTypography: {
    display: 'flex',
  }
}));

const ServiceView: React.FC<ServiceViewProps> = (props) => {
  const { match: { params: { provider, username } } } = props
  const service: IService = useSelector(selectUserByUsername(provider, username))[0];
  const classes = useStyles({});
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async (provider: string, username: string) => {
      await dispatch(fetchService(provider, username));
    }

    getUser(provider, username)
  }, [dispatch, provider, username]);

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
                            {service ? (
                              <Typography variant="h6">{service.data.username}</Typography>
                            ) : (
                              <Typography variant="h6">...</Typography>
                            )}
                          </Grid>
                          <Grid item>
                              {service ? (
                                <Typography>
                                    <MuiLink target="_blank" href={`https://github.com/${service.data.username}`} >
                                      {`https://github.com/${service.data.username}`}
                                    </MuiLink>
                                </Typography>
                              ): (
                                <Typography>...</Typography>
                              )}
                          </Grid>
                        </Grid>
                      </Grid>
                      {/* <Grid item md={4}>
                        {service ? (
                          <ServicePreview serviceId={service._id} />
                        ): (
                          null
                        )}
                      </Grid> */}
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid container spacing={2}>
                      <Grid item>
                        <Button variant="contained">Projects</Button>
                      </Grid>
                      <Grid item>
                        <Button variant="contained">Settings</Button>
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

interface ServiceViewProps extends RouteComponentProps<{provider: string; username: string}> {
  
}

export default ServiceView;