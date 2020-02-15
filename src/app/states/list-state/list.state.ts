import {IList} from "@models/IList";

export interface State {
    list: IList[],
    trashList: IList[],
    isLoading: boolean;
    error: string,
    chosenId: string
}

export const initialState: State = {
    list: [],
    trashList: [],
    chosenId: "",
    error: "",
    isLoading: false,
};

export const initList: IList = {
    createTime: Date.now(),
    editTime: Date.now(),
    header: "",
    id: "",
    isCollected: false,
    isEditState: false,
    isTop: false,
    itemIds: [],
    levelOneItem: [],
    levelTwoItem: [],
    tagId: "",
};
