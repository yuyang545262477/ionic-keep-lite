import {createAction, props} from "@ngrx/store";
import {ITag} from "@models/tap.model";
/*加载tag*/
export const loadTags = createAction(
    "[Tag] Load Tags",
);

export const loadTagsSuccess = createAction(
    "[Tag] Load Tags Success",
    props<{ data: any }>(),
);

export const loadTagsFailure = createAction(
    "[Tag] Load Tags Failure",
    props<{ error: any }>(),
);

/*增加Tag*/
const addingTag = createAction(
    "[Tag] Adding Tag",
    props<{ data: ITag }>(),
);
//增加成功
const addTagSuccess = createAction(
    "[Tag] Add Tag Success",
);
//增加失败
const addTagError = createAction(
    "[Tag] Add Tag Error",
    props<{ error: string }>(),
);

/*删除Tag*/
const removingTag = createAction(
    "[Tag] removing Tag",
    props<{ tagId: number }>(),
);
//删除成功
const removeTagSuccess = createAction(
    "[Tag] remove Success",
);
//删除失败
const removeTagError = createAction(
    "[Tag] remove Error",
    props<{ error: string }>(),
);

/*修改Tag*/
const modifyTag = createAction(
    "[Tag] modify Tag",
    props<{ tag: ITag }>(),
);
//修改成功
const modifyTagSuccess = createAction(
    "[Tag] modify Tag Success",
);
//修改失败
const modifyTagError = createAction(
    "[Tag] modify Tag Error",
    props<{ error: string }>(),
);
