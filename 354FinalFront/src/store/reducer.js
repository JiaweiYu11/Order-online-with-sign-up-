import { combineReducers } from 'redux';
import {reducer as registerReducer} from '../pages/register/store';
import {reducer as flashReducer} from '../pages/flash/store';
import {reducer as loginReducer} from '../pages/login/store';



//combine all reducer

export default combineReducers({
    register: registerReducer,
    flash: flashReducer,
    login: loginReducer,
});