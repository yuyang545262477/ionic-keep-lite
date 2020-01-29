import {createSelector} from '@ngrx/store';
import * as fromTags from './tag-state/tag.selectors';

//拦截.整个程序错误
export const selectAllError = createSelector(fromTags.selectMyFeatureError, (state) => state);

//拦截.整个程序加载状态
export const selectAllIsLoading = createSelector(fromTags.selectMyFeatureIsLoading, (state) => state);
