import {
    FETCH_SMURFS_FAIL,
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    CREATE_SMURFS_FAIL,
    CREATE_SMURFS_START,
    CREATE_SMURFS_SUCCESS
} from "../actions/actions";
import { REFUSED } from "dns";

const initState = {
    smurfs: [],
    error: '',
    isFetching : false

}

function reducer(state=initState, action) {
    console.log('State', state);
    switch; 
    case FETCH_SMURFS_START: 
        return {
            ...state, 
            isFetching: true,
            error: ''
        };

    case FETCH_SMURFS_FAIL: 
        return {
            ...state, 
            error: action.payload
        };  
    
    case FETCH_SMURFS_SUCCESS: 
        return {
            smurfs: [...state.smurfs, ...action.payload], 
            isFetching: false,
            error: ''
        };
    
    case CREATE_SMURFS_START:
        return {
            ...state,
            isFetching: true,
            error:''
        }

    case CREATE_SMURFS_SUCCESS:
        return {
            ...state,
            smurfs: [...action.payload],
            isFetching: false,
            error:'' 
        }