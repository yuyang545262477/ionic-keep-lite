import {createAction, props} from '@ngrx/store';

// const checkUserName = createAction("[User] checkUserName");
// const checkUserPSD = createAction("[User] checkUserPSD");
// const UserLoginOut = createAction("[User] loginOut");
// const UserLoginIn = createAction("[User] LoginIn");
export const modifyUserName = createAction(
    '[User] modifyName',
    props<{ userName: string }>(),
);
export const modifyUserAvatar = createAction(
    '[User] modifyAvatar',
    props<{ userAvatar: string }>(),
);
