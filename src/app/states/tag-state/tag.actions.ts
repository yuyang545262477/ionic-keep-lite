import {ITag} from "@models/tap.model";
import {createAction, props} from "@ngrx/store";
/*加载tag*/
export const loadTags = createAction(
    "[Tag] Load Tags",
);

export const loadTagsSuccess = createAction(
    "[Tag] Load Tags Success",
    props<{ data: ITag[] }>(),
);

export const loadTagsFailure = createAction(
    "[Tag] Load Tags Failure",
    props<{ error: string }>(),
);

/*增加Tag*/
export const addingTag = createAction(
    "[Tag] Adding Tag",
    props<{ name: string }>(),
);
//增加成功
export const addTagSuccess = createAction(
    "[Tag] Add Tag Success",
    props<{ data: ITag[] }>(),
);
//增加失败
export const addTagError = createAction(
    "[Tag] Add Tag Error",
    props<{ error: string }>(),
);

/*删除Tag*/
export const removeTag = createAction(
    "[Tag] removing Tag",
    props<{ tagId: string }>(),
);
//删除成功
export const removeTagSuccess = createAction(
    "[Tag] remove Success",
    props<{ data: ITag[] }>(),
);
//删除失败
export const removeTagError = createAction(
    "[Tag] remove Error",
    props<{ error: string }>(),
);


/*修改Tag*/
export const modifyTag = createAction(
    "[Tag] modify Tag",
    props<{ uniKey: string, key: keyof ITag, value: any }>(),
);
//修改成功
export const modifyTagSuccess = createAction(
    "[Tag] modify Tag Success",
    props<{ data: ITag[] }>(),
);
//修改失败
export const modifyTagError = createAction(
    "[Tag] modify Tag Error",
    props<{ error: string }>(),
);

/*重制临时名称*/
export const resetTempTagName = createAction(
    "[Tag] reset tempTag Name",
);
/*临时名称变更*/
export const updateTempTagName = createAction(
    "[Tag] tempTag Name update",
    props<{ tempTagName: string }>(),
);
/*变更标签的可读状态*/
export const updateTagEdit = createAction(
    "[Tag] updateTagEditStatus",
    props<{ uniKey: string, disStatus: boolean }>(),
);
/*变更可读状态成功*/
export const updateTagEditSuccess = createAction(
    "[Tag] updateTagEditSuccess",
    props<{ data: ITag[] }>(),
);
/*变更可读状态失败*/
export const updateTagEditError = createAction(
    "[Tag] updateTagEditError",
    props<{ error: string }>(),
);
/*变更标签名称状态*/
export const updateTagName = createAction(
    "[Tag] updateTagName",
    props<{ uniKey: string, tagName: string }>(),
);
/*变更标签名称状态成功*/
export const updateTagNameSuccess = createAction(
    "[Tag] updateTagNameSuccess",
    props<{ data: ITag[] }>(),
);
/*变更标签名称状态失败*/
export const updateTagNameError = createAction(
    "[Tag] updateTagNameError",
    props<{ error: string }>(),
);





