import {ITag} from '@models/tap.model';

export interface State {
    tags: ITag[]
    isLoading: boolean;
    error: string;
}
