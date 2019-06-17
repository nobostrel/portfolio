import { SEND_REQUEST_TABLE, REQUEST_FAILURE_TABLE, REQUEST_SUCCESS_TABLE, CURRENT_PAGE_CHANGE } from '../constants/index';

export function tableReducer(state = null, action) {
    switch (action.type) {
        case SEND_REQUEST_TABLE:
            return {...state, requestSent: true }
        case REQUEST_SUCCESS_TABLE:
            let initialCurrentData = action.data.slice(0,10);
            return {...state, data: action.data, status: action.status, requestSent: false, currentData: initialCurrentData }
        case REQUEST_FAILURE_TABLE:
            return {...state, status: action.status, statusText: action.text, requestSent: false }
        case CURRENT_PAGE_CHANGE:
            let result = state.data.slice(action.newPage*action.maxDataPerPage - action.maxDataPerPage, 
                action.newPage*action.maxDataPerPage);
            return {...state, currentData: result}
        default:
            return state;
    }
  }