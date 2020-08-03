import {userActions} from './user.constants';

export const setCurrentUser = (user) => ({
    type: userActions.SET_CURRENT_USER,
    payload: user
});