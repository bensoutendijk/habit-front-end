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
            New Project <br/>
            Create from Repository <br/>
            <Services />
        </div>
    )
}

export default ProjectNew;