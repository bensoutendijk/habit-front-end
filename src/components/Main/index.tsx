import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LogOut from '../LogOut';
import PageNotFound from '../PageNotFound';
import LogIn from '../LogIn';
import SignUp from '../SignUp';
import ProjectList from '../Projects';
import ProjectNew from '../Projects/ProjectNew';
import ProjectView from '../Projects/ProjectView';
import { AuthState } from '../../store/auth/types';
import { AppState } from '../../store';
import { useSelector } from 'react-redux';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import ServiceList from '../Services';
import ServiceView from '../Services/ServiceView';
import RepoView from '../Repos/RepoView';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    height: 1600,
    flexGrow: 1,
    '&::before': {
      background: theme.palette.secondary.main,
      content: "' '",
      display: 'block',
      height: '264px',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '100%',
    }
  },
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1200px',
    position  : 'relative',
    width: 'auto',
  }
}));

const Main: React.FC = () => {
  const classes = useStyles();

  const auth: AuthState = useSelector((state: AppState) => state.auth);
  
  return (
    <main className={classes.root}>
      <div className={classes.container}>
        {auth.fetched ? (
          <Switch>
            <Route exact path="/projects" component={ProjectList} />
            <Route exact path="/projects/new" component={ProjectNew} />
            <Route exact path="/services" component={ServiceList} />
            <Route exact path="/services/:provider/:username" component={ServiceView} />
            <Route exact path="/services/:provider/:username/:reponame" component={RepoView} />
            <Route exact path="/logout" component={LogOut} />
            <Route component={PageNotFound} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Redirect to="/login" />
          </Switch>
        )}
      </div>
    </main>
  )
}

export default Main;