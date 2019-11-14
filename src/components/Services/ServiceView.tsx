import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { Grid, makeStyles, createStyles, Theme, Paper } from '@material-ui/core';
import { fetchService } from '../../store/services/actions';
import { selectUserByUsername } from '../../selectors';
import { IService } from '../../store/services/types';
import ServiceSummary from './ServiceSummary';
import Skeleton from '../Skeleton';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    minHeight: '500px',
  },
  card: {
    display: 'flex',
    padding: theme.spacing(2)
  },
  serviceHero: {
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
              <ServiceSummary service={service} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={4}>
            <Grid item md={6}>
              <Paper className={classes.card}>
                <Skeleton height={200} />
              </Paper>
            </Grid>
            <Grid item md={6}>
              <Paper className={classes.card}>
                <Skeleton height={200} />
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