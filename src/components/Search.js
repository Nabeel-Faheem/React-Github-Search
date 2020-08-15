import React, { useState, useContext } from 'react';
import GithubContext from '../context/github/githubContext';

const Search = ( props ) => {

    const githubContext = useContext( GithubContext );

    const [ text, setText ] = useState('');

    const searchHandler = ( e ) => {
        // update the state
        setText(e.target.value);
    }

    const submitHandler = ( e ) => {
        e.preventDefault();
        if( text === '' ) {
            props.showAlert();
            return;
        }
        githubContext.searchInit( text );
        // update the state
        setText('');
    }

    const clearUsers = () => {
        props.clearUsers();
    }

    return (
        <React.Fragment>
            <form className="search" onSubmit={ submitHandler }>
                <input 
                    type="text"
                    name="text"
                    placeholder="Search here..."
                    value={ text }
                    onChange={ searchHandler }
                />
                <button type="submit">Search</button>
            </form>
            { !props.areUsersClear ? 
                <button type="button" onClick={ clearUsers }>Clear</button> : ''
            }
            
        </React.Fragment>
    )
}
export default Search;
