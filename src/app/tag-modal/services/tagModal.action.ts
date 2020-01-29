export interface ITagModalAction {
    present(): Promise<void>

    dismiss(): Promise<void>;
}
