import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';
import { RouteComponentProps } from 'react-router';

const RepoView: React.FC<RepoViewProps> = (props) => {
    const { match: { params: { provider, username } } } = props
    const repo = useSelector((state: AppState) => state.repos);

    console.log(props);

    return (
        <div>
            RepoView
        </div>
    )
}

interface RepoViewProps extends RouteComponentProps<{provider: string; username: string}> {
  
}

export default RepoView;