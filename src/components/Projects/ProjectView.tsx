import React from 'react';
import { useDispatch } from 'react-redux';

import {makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {

    }
}));

const ProjectView: React.FC = () => {
    const classes = useStyles({});

    return (
        <div className={classes.root}>
            ProjectView
        </div>
    )
}

export default ProjectView;