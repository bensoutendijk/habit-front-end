import React from 'react';

import Repos from '../Repos';

import {makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {

    }
}));

const ProjectView: React.FC = () => {
    const classes = useStyles({});

    return (
        <div className={classes.root}>
            <h2>Project</h2>
            <Repos />
        </div>
    )
}

export default ProjectView;