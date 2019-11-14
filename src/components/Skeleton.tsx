import React from 'react';
import { Paper, makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        margin: theme.spacing(2),
        width: '100%',
        backgroundColor: '#e0e0e0',
        height: '100%',
    },
}));

const Skeleton: React.FC<SkeletonProps> = (props) => {
    const classes = useStyles({});

    const { height } = props

    return (
        <Paper className={classes.root} style={{height: height}} />
    )
}

interface SkeletonProps {
    height: number
}

export default Skeleton;