import { Service } from "../services/types";

export const REQUEST_REPOS = 'REQUEST_REPOS';
export const RECIEVE_REPOS = 'RECIEVE_REPOS';
export const REJECT_REPOS = 'REJECT_REPOS';

export interface Repo {
    id: string;
    data: RepoData;
    service: Service;
    details: RepoDetails;
}

export interface RepoData {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: {
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        gravatar_id: string;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: string;
        site_admin: boolean;
    };
    html_url: string;
    description: string;
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage: string;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    has_issues: boolean;
    has_projects: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    forks_count: number;
    mirror_url: null;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license: null;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
    permissions: {
        admin: boolean;
        push: boolean;
        pull: boolean;
    };
}

export interface RepoContents {
    name: string;
    path: string;
    sha: string;
    size: number;
    url: string;
    html_url: string;
    git_url: string;
    download_url: string;
    type: string;
    _links: {
        self: string;
        git: string;
        html: string;
    };
    contents: RepoContents[] | undefined;
}

export interface RepoBranch {
    name: string;
    commit: {
        sha: string;
        url: string;
    };
    protected: boolean;
    protection: {
        enabled: boolean;
        required_status_checks: {
            enforcement_level: string;
            contexts: any[];
        };
    };
    protection_url: string;
}

export interface RepoDetails {
    contents: RepoContents[];
    branches: RepoBranch[];
}

export interface ReposState {
    fetched: boolean;
    fetching: boolean;
    byId: {
        [key: string]: Repo;
    };
    allIds: string[];
}

interface RequestRepos {
    type: typeof REQUEST_REPOS;
}

interface RecieveRepos {
    type: typeof RECIEVE_REPOS;
    payload: Repo[];
}

interface RejectRepos {
    type: typeof REJECT_REPOS;
}

export type ReposActionTypes = (
    RequestRepos |
    RecieveRepos |
    RejectRepos 
)