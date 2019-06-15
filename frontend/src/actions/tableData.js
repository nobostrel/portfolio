import { SEND_REQUEST_TABLE, REQUEST_SUCCESS_TABLE, REQUEST_FAILURE_TABLE } from '../constants/index';

export const sendRequestActionTable = url => {
    return {
        type: SEND_REQUEST_TABLE,
        url: url
    }
}

export const requestSuccessActionTable = (status, data) => {
    return {
        type: REQUEST_SUCCESS_TABLE,
        status: status,
        data: data
    }
}

export const requestFailureActionTable = (status, text) => {
    return {
        type: REQUEST_FAILURE_TABLE,
        status: status,
        text: text
    }
}