import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles, createStyles, Theme } from '@material-ui/core';

import Loading from '../Loading';

import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';
import { fetchProjects } from '../../store/projects/actions';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {

  },
}));

const ProjectList: React.FC = () => {
  const classes = useStyles({});
  const projects = useSelector((state: AppState) => state.projects);

  return (
    <div className={classes.root}>
      {projects.fetched ? (
        <div>
          List of Projects
        </div>
      ) : (
        <div>
          <span>No Projects Yet</span>
          <Link to="/projects/new">Create New Project</Link>
        </div>
      )}
    </div>
  )
}

export default ProjectList;