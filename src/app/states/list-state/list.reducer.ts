import {IList} from "@models/IList";
import {Action, createReducer, on} from "@ngrx/store";
import {fromListAction} from "@redux/list-state/index";

export const listFeatureKey = "list";

export interface State {
    list: IList[],
    trashList: IList[],
    isLoading: boolean;
    error: string
}

export const initialState: State = {
    list: [],
    trashList: [],
    error: "",
    isLoading: false,
};

const listReducer = createReducer(
    initialState,
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
);

export function reducer(state: State | undefined, action: Action) {
    return listReducer(state, action);
}
