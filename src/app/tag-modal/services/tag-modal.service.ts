import {Injectable} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {TagModalModule} from '../tag-modal.module';
import {TagModalComponent} from '../tag-modal/tag-modal.component';
import {ITagModalAction} from './tagModal.action';

@Injectable({
    providedIn: TagModalModule,
})
export class TagModalService implements ITagModalAction {
    private tagModalInstance: HTMLIonModalElement | undefined;

    constructor(private modalController: ModalController) {
    }

    async present(): Promise<void> {
        if (this.tagModalInstance) {
            await this.modalController.dismiss();
        }
        this.tagModalInstance = await this.modalController.create({
            component: TagModalComponent,
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
            console.error('dismiss error');
        }
        console.log(dismissResult);
    }


}
