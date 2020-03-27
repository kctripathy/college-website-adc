import estb from './establishmentReducer';
import user from './userReducer';
import student from './studentReducer';
import staff from './staffReducer';
import book from './bookReducer';

import { combineReducers } from 'redux';

export default combineReducers({
    estb,
    user,
    student,
    staff,
    book
});
