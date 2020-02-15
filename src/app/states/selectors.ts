import {createSelector} from "@ngrx/store";
import {ListStoreSelector} from "@redux/list-state";
import {TagStoreSelectors} from "@redux/tag-state";

//拦截.整个程序错误
export const selectAllError = createSelector(
    TagStoreSelectors.selectMyFeatureError,
    ListStoreSelector.selectMyFeatureError,
    (...restError) => {
        const hasError: ReadonlyArray<string> = restError.filter(value => Boolean(value));
        return hasError.length ? hasError[0] : "";
    },
);

//拦截.整个程序加载状态
export const selectAllIsLoading = createSelector(
    TagStoreSelectors.selectMyFeatureIsLoading,
    ListStoreSelector.selectMyFeatureIsLoading,
    (...allIsLoading) => allIsLoading.some(value => Boolean(value)),
);
