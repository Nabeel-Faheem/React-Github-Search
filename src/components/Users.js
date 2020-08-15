import React, { useContext } from 'react';

// custom imports
import User from './User';
import Spinner from './Spinner';
import GithubContext from '../context/github/githubContext';

const Users = ( props ) => {

    const githubContext = useContext( GithubContext );
    // destructure required values
    const { users, loading } = githubContext;

    return (
        <div className="users-list">
            { !loading ? users.map(( user, index ) => {
                return (
                    <User
                        key={ index } 
                        avatar_url={ user.avatar_url }
                        name={ user.login }
                        age={ user.age }
                        git_repo={ user.github_repo }
                        repos_url={ user.html_url }
                    />
                )
            }) : <Spinner /> }
        </div>
    )
}

export default Users;
