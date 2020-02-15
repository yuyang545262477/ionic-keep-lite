import {Injectable} from "@angular/core";
import {ModalController} from "@ionic/angular";
import {ComponentRef} from "@ionic/core";
import {IMyModalAction} from "./myModal.action";

@Injectable({
    providedIn: "root",
})
export class MyModalService implements IMyModalAction {
    private tagModalInstance: HTMLIonModalElement | undefined;

    constructor(private modalController: ModalController) {
    }

    async present(component: ComponentRef): Promise<void> {
        if (this.tagModalInstance) {
            await this.modalController.dismiss();
        }
        this.tagModalInstance = await this.modalController.create({
            component: component,
            backdropDismiss: false,
        });
        return await this.tagModalInstance.present();
    }

    async dismiss(): Promise<void> {
        if (!this.tagModalInstance) {
            return;
        }
        const dismissResult = await this.tagModalInstance.dismiss();
        if (dismissResult) {
            this.tagModalInstance = undefined;
        } else {
            console.error("dismiss error");
        }
    }


}
