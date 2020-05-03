import {Action, createReducer, on} from "@ngrx/store";
import * as fromListAction from "./list.actions";
import * as fromListState from "./list.state";

export const listFeatureKey = "list";


const listReducer = createReducer(
    fromListState.initialState,
    //添加列表
    on(fromListAction.addList,
        (state) => ({...state, isLoading: true}),
    ),
    //添加列表成功
    on(
        fromListAction.addListSuccess,
        fromListAction.storageListSuccess,
        (state, {list}) => ({...state, isLoading: false, error: "", list}),
    ),
    //添加列表失败
    on(
        fromListAction.addListError,
        (state, {error}) => ({...state, isLoading: false, error}),
    ),
    //进行列表存储失败
    on(
        fromListAction.storageListError,
        (state, {oldList, error}) => ({...state, list: oldList, error}),
    ),
//    更新选中的id
    on(fromListAction.updateChosenId,
        (state, {targetId}) => ({...state, chosenId: targetId}),
    ),
);

export function reducer(state: fromListState.State | undefined, action: Action) {
    return listReducer(state, action);
}
