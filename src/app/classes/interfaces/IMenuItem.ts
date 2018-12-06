export interface IMenuItem {
    id: number;
    name: string;
    description: string;
    url: string;
    faIcon?: string;
    menuItems?: Array<IMenuItem>
}