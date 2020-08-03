import {userActionTypes} from './user.constants';

// return type and payload for setCurrent user action
export const setCurrentUser = (user) => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
});