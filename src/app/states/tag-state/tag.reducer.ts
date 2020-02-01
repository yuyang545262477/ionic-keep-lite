import {Action, createReducer, on} from "@ngrx/store";
import * as fromTagActions from "./tag.actions";
import {State} from "./tag.state";

export const tagFeatureKey = "tag";


export const initialState: State = {
    tags: [],
    tempTagName: "",
    chosenTagId: "",
    isLoading: false,
    error: "",

};

const tagReducer = createReducer(
    initialState,
    /*标签的增删改查.进行时*/
    on(
        fromTagActions.addingTag,
        fromTagActions.removeTag,
        fromTagActions.modifyTag,
        fromTagActions.loadTags,
        state => ({...state, isLoading: true}),
    ),
    /*增加标签成功*/
    on(
        fromTagActions.addTagSuccess,
        (state, {data}) => ({...state, isLoading: false, tags: data, tempTagName: ""}),
    ),
    /*标签的行为成功,增删改查*/
    on(
        fromTagActions.addTagSuccess,
        fromTagActions.removeTagSuccess,
        fromTagActions.modifyTagSuccess,
        fromTagActions.loadTagsSuccess,
        fromTagActions.updateTagEditSuccess,
        fromTagActions.updateTagNameSuccess,
        (state, {data}) => ({...state, isLoading: false, tags: data}),
    ),
    on(
        fromTagActions.addTagError,
        fromTagActions.removeTagError,
        fromTagActions.modifyTagError,
        fromTagActions.loadTagsFailure,
        fromTagActions.updateTagEditError,
        fromTagActions.updateTagNameError,
        (state, {error}) => ({...state, isLoading: false, error})),
    on(
        fromTagActions.resetTempTagName,
        (state) => ({...state, tempTagName: ""}),
    ),
    on(
        fromTagActions.updateTempTagName,
        (state, {tempTagName}) => ({...state, tempTagName}),
    ),
    on(
        fromTagActions.updateChosenTagId,
        (state, {tagId}) => ({...state, chosenTagId: tagId}),
    ),
);

export function reducer(state: State | undefined, action: Action) {
    return tagReducer(state, action);
}
