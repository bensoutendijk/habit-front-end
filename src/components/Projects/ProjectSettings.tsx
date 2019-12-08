import React from 'react';

import Repos from '../Repos';

import {makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {

    }
}));

const ProjectSettings: React.FC = () => {
    const classes = useStyles({});

    return (
        <div className={classes.root}>
            <h4>Project Settings</h4>
            <Repos />
        </div>
    )
}

export default ProjectSettings;