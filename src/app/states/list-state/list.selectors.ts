import {createFeatureSelector, createSelector} from "@ngrx/store";
import {fromListReducer} from "@redux/list-state/index";

//获取整个list feature 状态
export const selectListFeatureState = createFeatureSelector<fromListReducer.State>(fromListReducer.listFeatureKey);

//获取error状态
export const selectMyFeatureError = createSelector(
    selectListFeatureState,
    (state: fromListReducer.State) => state.error,
);
//获取isLoading
export const selectMyFeatureIsLoading = createSelector(
    selectListFeatureState,
    (state: fromListReducer.State) => state.isLoading,
);
//获取list列表
export const selectAllMyList = createSelector(
    selectListFeatureState,
    s1 => s1.list,
);
