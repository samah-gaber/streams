import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import streamsReducers from './streamsReducers';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamsReducers
});