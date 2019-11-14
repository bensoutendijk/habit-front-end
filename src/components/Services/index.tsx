import React, { useState, useEffect } from 'react';
import { IService } from '../../store/services/types';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';
import { fetchServices } from '../../store/services/actions';
import { Grid, Typography } from '@material-ui/core';
import ServiceListItem from './ServiceListItem';

const ServiceList: React.FC = () => {

    const dispatch = useDispatch();

    const services = useSelector((state: AppState) => state.services);

    useEffect(() => {
        const getServices = async () => {
            await dispatch(fetchServices());
        }
        getServices();
    }, [dispatch]);

    return (
        <ul>
            {services.allIds.length ? (
              <Grid container direction="column">
                {services.allIds.map(id => (
                  <ServiceListItem key={id} userId={id} />
                ))}
              </Grid>
            ) : (
              <Grid container direction="column">
                <Typography color="textSecondary" variant="h4">You haven't connected any services yet</Typography>
              </Grid>
            )}
        </ul>
    )
}

export default ServiceList;