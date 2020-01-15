import {createAction, props} from "@ngrx/store";
import {ITag} from "@models/tap.model";
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
    props<{ data: ITag }>(),
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
    props<{ tagId: number }>(),
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
    props<{ uniKey: number, key: keyof ITag, value: any }>(),
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


