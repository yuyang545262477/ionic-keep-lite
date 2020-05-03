import {Injectable} from "@angular/core";
import {ModalController} from "@ionic/angular";
import {ComponentRef} from "@ionic/core";
import {IMyModalAction} from "./myModal.action";

@Injectable({
    providedIn: "root",
})
export class MyModalService implements IMyModalAction {


    constructor(private modalController: ModalController) {
    }

    async present(component: ComponentRef): Promise<void> {
        const modalInstance = await this.modalController.create({
            component: component,
            backdropDismiss: false,
        });
        return await modalInstance.present();
    }

    async dismiss(): Promise<void> {
        await this.modalController.dismiss();
    }


}
