import {Action, createReducer, on} from "@ngrx/store";
import {ITag} from "@models/tap.model";
import * as fromTagActions from "./tag.actions";

export const tagFeatureKey = "tag";

export interface State {
    tags: ITag[]
    isLoading: boolean;
    error: string;
}

export const initialState: State = {
    tags: [],
    isLoading: false,
    error: "",
};

const tagReducer = createReducer(
    initialState,
    // todo add others reduce action.
    on(fromTagActions.loadTags, state => ({...state, isLoading: true})),
);

export function reducer(state: State | undefined, action: Action) {
    return tagReducer(state, action);
}
