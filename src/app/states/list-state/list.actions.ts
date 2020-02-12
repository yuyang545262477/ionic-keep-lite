import {IList} from "@models/IList";
import {createAction, props} from "@ngrx/store";

export const loadLists = createAction(
    "[List] Load Lists",
);

export const loadListsSuccess = createAction(
    "[List] Load Lists Success",
    props<{ data: IList[] }>(),
);

export const loadListsFailure = createAction(
    "[List] Load Lists Failure",
    props<{ error: string }>(),
);
/*增加列表状态*/
export const addList = createAction(
    "[List] addList",
);
//增加列表状态成功
export const addListSuccess = createAction(
    "[List] addListSuccess",
    props<{ list: IList[] }>(),
);
//增加列表状态失败
export const addListError = createAction(
    "[List] addListError",
    props<{ error: string }>(),
);

/*存储列表状态*/
export const storageList = createAction(
    "[List] storageList",
    props<{ list: IList[], oldList: IList[] }>(),
);
//存储列表状态成功
export const storageListSuccess = createAction(
    "[List] storageListSuccess",
    props<{ list: IList[] }>(),
);
//存储列表状态失败
export const storageListError = createAction(
    "[List] storageListError",
    props<{
        oldList: IList[]
        error: string
    }>(),
);

/*删除列表对象*/

/*归档列表对象*/

/*变更列表header*/
/*重制header*/

/*增加列表，一级item*/
/*删除列表，一级item*/
/*调整列表，一级item*/
/*修改列表,一级item*/

/*增加列表，二级item*/
/*删除列表，二级item*/
/*调整列表，二级item*/
/*修改列表,二级item*/
/**/


