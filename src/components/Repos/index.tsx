import React, { useEffect } from 'react';
import { IService } from '../../store/services/types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepos } from '../../store/repos/actions';
import { AppState } from '../../store';
import { List, ListItem } from '@material-ui/core';
import { Link, RouteComponentProps } from 'react-router-dom';

const RepoList: React.FC<RepoListProps> = (props) => {
    const { service, search, type } = props;
    const repos = useSelector((state: AppState) => state.repos);

    const dispatch = useDispatch();

    useEffect(() => {
        const getRepos = async (service: IService) => {
          await dispatch(fetchRepos(service));
        }
    
        getRepos(service);
    }, [dispatch, service]);

    switch (type) {
        case 'buttons': {
            return (
                <div>
                    {repos ? (
                        <List>
                            {repos.allIds
                            .filter(id => repos.byId[id].name.match(search))
                            .map((id) => (
                                <ListItem button component={Link} to={`/${repos.byId[id].name.toLowerCase()}`}>
                                    {repos.byId[id].name}
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                        null
                    )}
                </div>
            )
        }
        
        default: {
            return (
                <div>
                    {repos ? (
                        <ul>
                            {repos.allIds
                            .filter(id => repos.byId[id].name.match(search))
                            .map((id) => (
                                <li>
                                    {repos.byId[id].name}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        null
                    )}
                </div>
            )
        }
    }
}

interface RepoListProps {
    service: IService
    search: string
    type: 'default' | 'buttons' | undefined
}

export default RepoList;
