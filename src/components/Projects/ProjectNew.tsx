import React, { useEffect, useState } from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core';

import Loading from '../Loading';
import Services from '../Services';

import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../store';
import { fetchServices } from '../../store/services/actions';

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