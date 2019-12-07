import React from 'react';
import { RouteComponentProps, Route } from 'react-router-dom';

import { makeStyles, createStyles, Theme } from '@material-ui/core';

import Repos from '../Repos';

import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import { selectService } from '../../selectors';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        
    },
}));

const RepoView: React.FC<ServiceViewProps> = ({ match }) => {
    const { params: { provider, username } } = match;
    const classes = useStyles({});
    const service = useSelector(selectService(provider, username));
    return (
        <div className={classes.root}>
            {service.data.username}
            <Route component={Repos} />
        </div>
    )
}

interface MatchProps {
    username: string;
    provider: string;
}

interface ServiceViewProps extends RouteComponentProps<MatchProps> {
  
}

export default RepoView;