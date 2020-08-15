import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import { SHOW_USERS, SHOW_LOADING } from '../actions';

// create a state managing component
const GithubState = ( props ) => {

    // define the initial state
    const initialState = {
        users: [],
        loading: false,
        alert: false,
    };

    // useReducer hook
    const [ state, dispatch ] = useReducer( GithubReducer, initialState );

    /*  actions (action methods) */
    // search handler action
    const searchHandler = async ( search_query ) => {
        setLoading();

        try {
            const response = await axios.get(`https://api.github.com/search/users?q=${ search_query }&client_id=${ process.env.CLIENT_ID }&client_secret=${ process.env.CLIENT_SECRET_KEY }`);
            console.log( response.data.items );
            dispatch({
                type: SHOW_USERS,
                payload: response.data.items,
            });
        } catch( err ) {
            console.log( err );
        }
    }

    // loading action
    const setLoading = () => {
        dispatch({
            type: SHOW_LOADING,
        });
    }


    // return the context provider
    return (
        <GithubContext.Provider
            value={{ 
                users: state.users,
                loading: state.loading,
                alert: state.alert,
                searchInit: searchHandler 
             }}
        >
            { props.children }
        </GithubContext.Provider>
    );

}

export default GithubState;