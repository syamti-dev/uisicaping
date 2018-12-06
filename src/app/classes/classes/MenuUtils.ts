import { IMenuItem } from '../interfaces/IMenuItem';
import { ITreeNodeComponent } from '../interfaces/ITreeNodeComponent';

export class MenuUtils {

    constructor() { }

    getMenuItems(items: IMenuItem[], idNeg: number): ITreeNodeComponent[] {
        let subitems: ITreeNodeComponent[] = [];

        for (let item of items) {
            let hasChildren: boolean = item.menuItems && item.menuItems.length > 0;
            if (hasChildren) {
                let node: ITreeNodeComponent = {
                    id: idNeg--,
                    name: item.name,
                    children: this.getMenuItems(item.menuItems, idNeg)
                };

                subitems.push(node);
            } else {
                let node: ITreeNodeComponent = {
                    id: item.id,
                    name: item.name,
                    children: []
                };

                subitems.push(node);
            }
        }

        return subitems;
    }
}