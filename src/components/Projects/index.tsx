import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { AppState } from '../../store';

import { Grid, makeStyles, createStyles, Theme, InputBase, Button, Typography, Paper } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/SearchOutlined'

import ProjectListItem from './ProjectListItem';
import { fetchProjects } from '../../store/projects/actions';
import { Link } from 'react-router-dom';

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

const ProjectList: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const projects = useSelector((state: AppState) => state.projects);

  useEffect(() => {
    const getUsers = async () => {
      await dispatch(fetchProjects());
    }
    getUsers();
    
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
            {projects.allIds.length ? (
              <Grid container direction="column">
                {projects.allIds.map((_id: string) => (
                  <ProjectListItem key={_id} _id={_id} />
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

export default ProjectList;