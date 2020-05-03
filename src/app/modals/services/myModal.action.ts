import {ComponentRef} from "@ionic/core";

export interface IMyModalAction {
    present(component: ComponentRef): Promise<void>

    dismiss(): Promise<void>;
}
