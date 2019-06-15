import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { tableReducer} from './tableReducer';

export const rootReducer = history => combineReducers({
    router: connectRouter(history),
    tableData: tableReducer
  });