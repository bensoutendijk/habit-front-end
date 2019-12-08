import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core';

import Projects from '../Projects';
import Repos from '../Repos';


const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {

    },
}));

const Dashboard: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h3>Dashboard</h3>
            <div>
                <Projects />
                <Repos />
            </div>
        </div>
    )
}

export default Dashboard;