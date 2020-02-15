import {IList} from "@models/IList";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {selectTagChosenId} from "@redux/tag-state/tag.selectors";
import * as fromListReducer from "./list.reducer";
import * as fromListState from "./list.state";

//获取整个list feature 状态
export const selectListState = createFeatureSelector<fromListState.State>(fromListReducer.listFeatureKey);

//获取error状态
export const selectMyFeatureError = createSelector(
    selectListState,
    (state: fromListState.State) => state.error,
);
//获取isLoading
export const selectMyFeatureIsLoading = createSelector(
    selectListState,
    (state: fromListState.State) => state.isLoading,
);
//获取选中id
export const selectChosenId = createSelector(
    selectListState,
    s1 => s1.chosenId,
);
//获取list列表
export const selectListByTagId = createSelector(
    selectListState,
    selectTagChosenId,
    (s1, chosenId): IList[] => {
        if (!chosenId) {
            return s1.list;
        }
        return s1.list.filter(value => value.id === chosenId);
    },
);
//选中id的list
export const selectAllList = createSelector(
    selectListState,
    s1 => s1.list,
);

export const selectListByChosenId = createSelector(
    selectAllList,
    selectChosenId,
    (allList, chosenId): IList => {
        if (!chosenId) {
            return fromListState.initList;
        }
        const distList = allList.find(list => list.id === chosenId);
        return distList || fromListState.initList;
    },
);
