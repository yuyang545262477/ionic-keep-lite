import {ITag} from "@models/tap.model";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {initChosenTag, tagFeatureKey} from "./tag.reducer";
import {State} from "./tag.state";


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
//获取选中TagId.
export const selectTagChosenId = createSelector(
    selectMyFeatureState,
    s1 => s1.chosenTagId,
);
//获取单个tag元素
export const selectFeatureTagById = createSelector(
    selectAllMTags,
    (allTags: ITag[], props: { id: string }) => {
        if (!Array.isArray(allTags)) {
            return undefined;
        }
        return allTags.find(value => value.id === props.id);
    },
);
//获取临时标签名称
export const selectFeatureTempTagName = createSelector(
    selectMyFeatureState,
    (state) => state.tempTagName,
);


//获取选中tag名称

export const selectTagChosenInfo = createSelector(
    selectTagChosenId,
    selectAllMTags,
    (chosenId, tags) => {
        if (!Array.isArray(tags)) {
            return initChosenTag;
        }
        return tags.find(value => value.id === chosenId) || initChosenTag;
    },
);

