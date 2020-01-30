import {ITag} from "@models/tap.model";

export interface State {
    tags: ITag[],
    tempTagName: string, //临时tagName
    isLoading: boolean;
    error: string;
}
