import {Action} from "@ngrx/store";
import {RootStoreAction} from "@redux/index";

export interface IMenuItem {
    title: string,
    url: "home" | "list",
    icon: string,
    action: () => Action
}


export const appPages: IMenuItem[] = [
    {
        title: "Home",
        url: "home",
        icon: "home",
        action: () => RootStoreAction.goHomePage(),
    },
    {
        title: "List",
        url: "list",
        icon: "list",
        action: () => RootStoreAction.goListPage({}),
    },
];
