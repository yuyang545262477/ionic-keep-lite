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

