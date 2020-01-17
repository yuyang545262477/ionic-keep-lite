import {createFeatureSelector, createSelector} from "@ngrx/store";
import {State, tagFeatureKey} from "./tag.reducer";
import {ITag} from "@models/tap.model";


//获取整个feature状态
export const selectMyFeatureState = createFeatureSelector<State>(tagFeatureKey);

//获取error状态
export const selectMyFeatureError = createSelector(
    selectMyFeatureState,
    (state: State) => state.error,
);
//获取isLoading
export const selectMyFeatureIsLoading = createSelector(
    selectMyFeatureState,
    (state: State) => state.isLoading,
);
//获取整个tags数组
export const selectAllMTags = createSelector(
    selectMyFeatureState,
    (state: State) => state.tags,
);
//获取单个tag元素
export const selectFeatureTagById = createSelector(
    selectAllMTags,
    (allTags: ITag[], props: { id: number }) => {
        if (!Array.isArray(allTags)) {
            return undefined;
        }
        return allTags.find(value => value.id === props.id);
    },
);


