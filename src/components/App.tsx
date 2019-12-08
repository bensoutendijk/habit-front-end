import React, { useEffect, useState } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import Loading from './Loading';
import Header from './Header';
import Dashboard from './Dashboard';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Projects from './Projects';
import Services from './Services';

import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store';
import { fetchAuth } from '../store/auth/actions';
import { AuthState } from '../store/auth/types';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#027368',
            contrastText: 'black',
        },
        secondary: {
            main: '#0D0D0D',
            light: '#B1B1B1',
            contrastText: '#F2F2F2',
        },
        text: {
            primary: '#020202',
            secondary: '#b2b2b2',
        },
    },
    overrides: {
        MuiPaper: {
            root: {
                color: '#020202',
            },
        },
    },
});

function App() {
    const dispatch = useDispatch();
    const auth: AuthState = useSelector((state: AppState) => state.auth);

    const [ready, setReady] = useState(false);

    useEffect(() => {
        const getAuth = async () => {
            await dispatch(fetchAuth());
        }

        getAuth()
            .then(() => setReady(true));
        
    }, [dispatch]);

    if(!ready) {
        return null;
    }

    return (
        <ThemeProvider theme={theme}>
            <Header />
            <main>
                {auth.fetched ? (
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        {/* <Route exact path="/projects" component={ProjectList} /> */}
                        <Route path="/projects" component={Projects} />
                        <Route path="/services" component={Services} />
                        {/* <Route exact path="/services/:provider/:username/repos/:reponame" component={RepoView} /> */}
                        {/* <Route exact path="/logout" component={LogOut} /> */}
                        {/* <Redirect to="/" /> */}
                    </Switch>
                ) : (
                    <Switch>
                        <Route exact path="/login" component={LogIn} />
                        <Route exact path="/signup" component={SignUp} />
                        <Redirect to="/login" />
                    </Switch>
                )}
            </main>
        </ThemeProvider>
    )
}

export default App;
