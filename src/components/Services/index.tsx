import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Loading from '../Loading';
import ServiceList from './ServiceList';
import ServiceView from './ServiceView';
import Repos from '../Repos';

import { useDispatch } from 'react-redux';
import { fetchServices } from '../../store/services/actions';

const Services: React.FC = () => {
    const dispatch = useDispatch();

    const [ready, setReady] = useState(false);

    useEffect(() => {
        const getServices = async () => {
            await dispatch(fetchServices());
        }
        getServices()
            .then(() => setReady(true))
    }, [dispatch]);
  
    if (!ready) {
        return (
            <Loading />
        )
    }

    return (
        <Switch>
            <Route exact path="/projects/:provider/:username/:reponame" component={Repos} />
            <Route exact path="/services/:provider/:username" component={ServiceView} />
            <Route component={ServiceList} />
        </Switch>
    )
}

export default Services;