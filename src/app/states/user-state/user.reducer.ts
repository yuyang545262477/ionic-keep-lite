import {createReducer, on} from "@ngrx/store";
import * as UserActions from "./user.action";
import {IUser} from "../../models/user.model";

interface UserState {
    user: IUser,
    isLoading: boolean;
    error: string;
}

const initState: UserState = {
    user: {
        avatar: "",
        name: "",
    },
    isLoading: false,
    error: "",
};

const _userReducer = createReducer(initState,
    on(UserActions.modifyUserAvatar, (state, {userAvatar}) => ({...state, userAvatar})),
    on(UserActions.modifyUserName, (state, {userName}) => ({...state, userName})),
);

export function userReducer(state, action) {
    return _userReducer(state, action);
}
