import { IMenuItem } from "./IMenuItem";

export interface IMenuSistema {
    name: string;
    description: string;
    isHeader?: boolean;
    menuItems?: Array<IMenuItem>;
}