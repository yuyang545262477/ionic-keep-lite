import {IList} from "@models/IList";

export const initList: IList = {
    createTime: Date.now(),
    editTime: Date.now(),
    header: "",
    id: "",
    isCollected: false,
    isEditState: false,
    isTop: false,
    l1ids: [],
    l2ids: [],
    l3ids: [],
    items: [],
    tagIds: [],

};

export interface State {
    list: IList[],
    trashList: IList[],
    isLoading: boolean;
    error: string,
    chosenId: string
}

export const initialState: State = {
    list: [], //列表数组
    trashList: [], //归档数组
    chosenId: "", //选中id
    error: "", //错误信息
    isLoading: false, //加载状态
};
