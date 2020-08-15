import React from 'react';

const User = ( props ) => {

    const { avatar_url, name, age, repos_url } = props;

    return (
        <div className="user">
            <img src={ avatar_url } alt="user-avatar" />
            <p><strong>{ name }</strong></p>
            <p>{ age }</p>
            <p><a href={ repos_url }>Repos URL</a></p>
        </div>
    )
}

export default User;
