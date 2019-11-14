import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IService } from '../../store/services/types';
import { AppState } from '../../store';
import { fetchServices } from '../../store/services/actions';

import { Grid, Typography, Paper, makeStyles, createStyles, Theme, InputBase, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/SearchOutlined'

import ServiceListItem from './ServiceListItem';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    minHeight: '500px',
  },
  header: {
    padding: theme.spacing(4)
  },
  searchBar: {
    border: '2px solid #e2e2e2',
    borderRadius: theme.spacing(1),
  },
  noProjectList: {
    alignItems: 'center',
    padding: theme.spacing(2),
  },
}));

const ServiceList: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const services = useSelector((state: AppState) => state.services);

    useEffect(() => {
        const getServices = async () => {
            await dispatch(fetchServices());
        }
        getServices();
    }, [dispatch]);

    return (
      <div className={classes.root}>
        <Paper>
          <Grid container direction="column">
            <Grid item>
              <Grid className={classes.header} container justify="space-between">
                <Grid item>
                  <Grid className={classes.searchBar} container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <SearchIcon />
                    </Grid>
                    <Grid item>
                      <InputBase id="input-with-icon-grid" placeholder="Search" />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Button
                    color="secondary"
                    variant="contained"
                    component={Link}
                    to="/projects/new"
                  >
                    Create New Project
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {services.allIds.length ? (
                <Grid container direction="column">
                  {services.allIds.map((_id: string) => (
                    <ServiceListItem key={_id} userId={_id} />
                  ))}
                </Grid>
              ) : (
                <Grid className={classes.noProjectList} container direction="column">
                  <Typography color="textSecondary" variant="h4">You haven't created any projects yet</Typography>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Paper>
      </div>
    )
}

export default ServiceList;