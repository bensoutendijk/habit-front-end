import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core';

import Services from '../Services';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {

    },
}));

const ProjectNew: React.FC = () => {
    const classes = useStyles({});

    return (
        <div className={classes.root}>
            <h2>New Project</h2>
            <Services />
        </div>
    )
}

export default ProjectNew;