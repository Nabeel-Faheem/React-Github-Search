// import the acions
import { SHOW_USERS, SHOW_LOADING } from '../actions';

export default ( state, action ) =>  {
    switch( action.type ) {
        case SHOW_LOADING:
            return {
                ...state,
                loading: true,
            }
        case SHOW_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}
