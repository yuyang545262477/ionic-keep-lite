import {IList} from "@models/IList";
import {v4 as uuid} from "uuid";

export const addList = (oldList: IList[]): { latestList: IList[], oldList: IList[] } => {
    const initList: IList = {
        createTime: Date.now(),
        editTime: Date.now(),
        isTop: false,
        header: "",
        id: uuid(),
        isCollected: false,
        isEditState: false,
        l1ids: [],
        items: [],
        l2ids: [],
        l3ids: [],
        tagIds: []

    };
    if (!Array.isArray(oldList)) {
        return {
            latestList: Array.of(initList),
            oldList: [],
        };
    } else {
        return {
            latestList: [...oldList, initList],
            oldList,
        };
    }
};
