import {Action} from "@ngrx/store";
import {RootStoreAction} from "@redux/index";

export interface IMenuItem {
    title: string,
    url: "home" | "list",
    icon: string,
    action: () => Action
}


export const menuItems: IMenuItem[] = [
    {
        title: "Home",
        url: "home",
        icon: "home-outline",
        action: () => RootStoreAction.goHomePage(),
    },
    {
        title: "List",
        url: "list",
        icon: "bulb-outline",
        action: () => RootStoreAction.goListPage({}),
    },
];
