import React, { useEffect, useState } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

import { makeStyles, createStyles, Theme } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import { selectRepo } from '../../selectors';
import { createProject } from '../../store/projects/actions';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        
    },
}));

const RepoSettings: React.FC<RepoSettingsProps> = ({ match }) => {
    const { params: { reponame } } = match;
    const classes = useStyles({});
    const dispatch = useDispatch();
    const repo = useSelector(selectRepo(reponame));
    const [projectReady, setProjectReady] = useState(false);

    useEffect(() => {
        const postProject = async () => {
            await dispatch(createProject(repo));
        }
    
        postProject()
            .then(() => setProjectReady(true));
    }, [dispatch]);

    if (!projectReady) {
        return null;
    }

    return (
        <div className={classes.root}>
            <h3>Repo Settings</h3>
            {repo ? (
                <div>
                    <h4>{repo.data.name}</h4>
                    <ul>
                        {repo.details.branches.map(branch => (
                            <li key={btoa(branch.name)}>
                                <div>
                                    <span>
                                        {branch.name}
                                    </span>
                                    <Link to={`${match.url}/branches/${encodeURI(branch.name)}/deploy`}>Deploy</Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                null
            )}
        </div>
    )
}

interface MatchProps {
    username: string;
    provider: string;
    reponame: string;
}

interface RepoSettingsProps extends RouteComponentProps<MatchProps> {
  
}

export default RepoSettings;