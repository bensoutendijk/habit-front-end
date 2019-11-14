import React from 'react';
import { Paper, Grid, Typography, Button, Link as MuiLink, makeStyles, createStyles, Theme } from '@material-ui/core';
import { IService } from '../../store/services/types';
import Skeleton from '../Skeleton';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      display: 'flex',
      padding: theme.spacing(4)
    },
    serviceOptions: {
        paddingTop: theme.spacing(4),
    },
}));

const ServiceSummary: React.FC<ServiceSummaryProps> = (props) => {
    const { service } = props

    const classes = useStyles({});

    return (
        <Paper className={classes.root}>
            <Grid container direction="column">
                <Grid item>
                <Grid container>
                    <Grid item md={8}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                        {service ? (
                            <Typography variant="h6">{service.data.username}</Typography>
                        ) : (
                            <Skeleton height={32} />
                        )}
                        </Grid>
                        <Grid item>
                            {service ? (
                            <Typography>
                                <MuiLink target="_blank" href={`https://github.com/${service.data.username}`} >
                                    {`https://github.com/${service.data.username}`}
                                </MuiLink>
                            </Typography>
                            ): (
                                <Skeleton height={32} />
                            )}
                        </Grid>
                    </Grid>
                    </Grid>
                </Grid>
                </Grid>
                <Grid item>
                    <Grid className={classes.serviceOptions} container spacing={2}>
                        <Grid item>
                            <Button variant="contained">Projects</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained">Settings</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

interface ServiceSummaryProps {
    service: IService
}

export default ServiceSummary;
