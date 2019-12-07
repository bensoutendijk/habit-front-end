import React from 'react';
import { Link, Route } from 'react-router-dom';

import { makeStyles, createStyles, Theme } from '@material-ui/core';

import Projects from '../Projects';


const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {

    },
}));

const Dashboard: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Dashboard
            <div>
                <Projects />
            </div>
        </div>
    )
}

export default Dashboard;