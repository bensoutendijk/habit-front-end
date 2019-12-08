import React from 'react';
import { Link, Route } from 'react-router-dom';

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
            Dashboard
            <div>
                Projects List
                <Projects />
                Repo List
                <Repos />
            </div>
        </div>
    )
}

export default Dashboard;