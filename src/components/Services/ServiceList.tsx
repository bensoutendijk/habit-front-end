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

const ServiceList: React.FC = () => {
  const classes = useStyles({});
  const services = useSelector((state: AppState) => state.services);

  return (
    <div className={classes.root}>
      {services.fetched ? (
        <ul>
          {services.allIds.map(id => (
              <li key={id}>
                <Link to={`/services/${services.byId[id].provider}/${services.byId[id].data.username}`}>
                  {services.byId[id].data.username}
                </Link>
              </li>
          ))}
        </ul>
      ) : (
        <a href="/api/auth/github/login">Connect Github Account</a>
      )}
    </div>
  )
}

export default ServiceList;