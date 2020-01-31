import {Injectable} from "@angular/core";
import {ToastController} from "@ionic/angular";
import {ToastOptions} from "@ionic/core";


@Injectable({
    providedIn: "root",
})
export class ToastService {
    private readonly DURATION: number = 3000;

    constructor(private toastController: ToastController) {
    }

    /*现实成功提示*/
    async showSuccessToast(message: string): Promise<void> {
        return await this.absShowToast({
            message,
        });
    }

    /*现实失败提示*/
    async showErrorToast(errorMsg: string): Promise<void> {
        return await this.absShowToast({
            message: errorMsg,
            color: "danger",
        });
    }

    /*present*/
    private async absShowToast(toastOptions: ToastOptions): Promise<void> {
        const initOptions: ToastOptions = {
            duration: this.DURATION,
            position: "top",
        };
        const toast = await this.toastController.create({...initOptions, ...toastOptions});
        return toast.present();
    }
}
