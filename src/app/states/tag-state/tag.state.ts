import {ITag} from "@models/tap.model";

export interface State {
    tags: ITag[],
    tempTagName: string, //临时tagName
    chosenTagId: string, //选中id
    isLoading: boolean;
    error: string;
}
