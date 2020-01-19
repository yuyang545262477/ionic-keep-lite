export interface IMenuItem {
    title: string,
    url: string,
    icon: string
}

export const appPages: IMenuItem[] = [
    {
        title: "Home",
        url: "/home",
        icon: "home",
    },
    {
        title: "List",
        url: "/list",
        icon: "list",
    },
];
