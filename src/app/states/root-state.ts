import * as fromTags from "./tag-state/tag.reducer";

export interface RootState {
    tags: fromTags.State,
}
