import {ComponentRef} from '@ionic/core';

export interface ITagModalAction {
    present(component: ComponentRef): Promise<void>

    dismiss(): Promise<void>;
}
