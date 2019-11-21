import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { Grid, makeStyles, createStyles, Theme, Paper, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/SearchOutlined'

import { fetchService } from '../../store/services/actions';
import { selectUserByUsername } from '../../selectors';
import { IService } from '../../store/services/types';
import ServiceSummary from './ServiceSummary';
import Skeleton from '../Skeleton';
import { fetchRepos } from '../../store/repos/actions';
import RepoList from '../Repos';
import { AppState } from '../../store';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    minHeight: '500px',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2)
  },
  searchBar: {
    border: '2px solid #e2e2e2',
    borderRadius: theme.spacing(1),
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
  const [search, setSearch] = useState('');
  const classes = useStyles({});
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async (provider: string, username: string) => {
      await dispatch(fetchService(provider, username));
    }

    getUser(provider, username);
  }, [dispatch, provider, username]);

  return (
    <div className={classes.root}>
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <Grid container spacing={4}>
            <Grid item md={8}>
              {service ? (
                <ServiceSummary service={service} />
              ) : (
                <Skeleton height={200} />
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={4}>
            <Grid item md={6}>
              <Paper className={classes.card}>
                {service ? (
                  <Grid className={classes.searchBar} container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <SearchIcon />
                    </Grid>
                    <Grid item>
                      <InputBase id="input-with-icon-grid" placeholder="Search" value={search} onChange={(event) => setSearch(event.target.value)} />
                    </Grid>
                  </Grid>
                ) : (
                  <Skeleton height={32} />
                )}
                {service ? (
                    <Route render={(props) => <RepoList {...props} search={search} type={'buttons'}/>} />
                ) : (
                  <Skeleton height={200} />
                )}
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