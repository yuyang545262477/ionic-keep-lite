import {createAction, props} from "@ngrx/store";


export const showSuccessToast = createAction(
    "[App] showSuccessToast",
    props<{ message: string }>(),
);

export const showErrorToast = createAction(
    "[App] showErrorToast",
    props<{ errMsg: string }>(),
);

/*show modal */
export const openTagModal = createAction(
    "[App] openTagModal",
);
/*close modal*/
export const closeTagModal = createAction(
    "[App] closeTagModal",
);

/*goto tag list*/
export const goListPage = createAction(
    "[App] goListPage",
    props<{ tagId?: string }>(),
);
/*router go home*/
export const goHomePage = createAction(
    "[App] goHomePage",
);

/*close menu */
export const closeSideMenu = createAction(
    "[App] closeSideMenu",
);
/*open menu*/
export const openSideMenu = createAction(
    "[App] openSideMenu",
);

/*open user modal*/
export const openUserModal = createAction(
    "[App] openUserModal",
);
/*close user modal*/
export const closeUserModal = createAction(
    "[App] closeUserModal",
);

/*open list modal*/
export const openListModal = createAction(
    "[App] openListModal",
    props<{ tagId: string }>(),
);
export const closeListModal = createAction(
    "[App] closeListModal",
);
