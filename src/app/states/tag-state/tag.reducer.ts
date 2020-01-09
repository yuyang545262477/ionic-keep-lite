import {Action, createReducer} from "@ngrx/store";
import {ITag} from "@models/tap.model";

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
);

export function reducer(state: State | undefined, action: Action) {
    return tagReducer(state, action);
}
