import { SEND_REQUEST_TABLE, REQUEST_FAILURE_TABLE, REQUEST_SUCCESS_TABLE } from '../constants/index';

export function tableReducer(state = null, action) {
    switch (action.type) {
        case SEND_REQUEST_TABLE:
            return {...state, requestSent: true }
        case REQUEST_SUCCESS_TABLE:
            return {...state, data: action.data, status: action.status, requestSent: false }
        case REQUEST_FAILURE_TABLE:
            return {...state, status: action.status, statusText: action.text, requestSent: false }
        default:
            return state;
    }
  }