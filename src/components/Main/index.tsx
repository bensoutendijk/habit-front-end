import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import LogOut from '../LogOut';
import PageNotFound from '../PageNotFound';
import LogIn from '../LogIn';
import SignUp from '../SignUp';
import Projects from '../Projects';
import ProjectNew from '../Projects/ProjectNew';
import ProjectView from '../Projects/ProjectView';
import { AuthState } from '../../store/auth/types';
import { AppState } from '../../store';
import { useSelector } from 'react-redux';
import { makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
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
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/projects/new" component={ProjectNew} />
            <Route path="/projects/:serviceId" component={ProjectView} />
            <Route exact path="/logout" component={LogOut} />
            <Redirect to="/projects" />
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