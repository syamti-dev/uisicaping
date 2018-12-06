import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security/security.service';
import { IMenuSistema } from 'src/app/classes/interfaces/IMenuSistema';
import { ITreeOptions, TreeComponent, TreeModel, TreeNode, TREE_ACTIONS } from 'angular-tree-component';
import { ITreeNodeComponent } from 'src/app/classes/interfaces/ITreeNodeComponent';
import { MenuUtils } from 'src/app/classes/classes/MenuUtils';

@Component({
    selector: 'app-profiles',
    templateUrl: './profiles.component.html',
    styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit, AfterViewInit {

    @ViewChild('profileCfgTree') profileCfgTree : TreeComponent; 

    nodes : ITreeNodeComponent[] = [];
    selectedNodesId : number[] = [];

    treeOptions : ITreeOptions = {
        animateExpand: true,
        useCheckbox: true,
        useTriState: true,
        actionMapping: {
            mouse: {
                checkboxClick: (tree : TreeModel, node : TreeNode, $event : any) => {
                    let theNode : TreeNode = node && node.toggleSelected();

                    this.selectedNodesId = Object.entries(tree.selectedLeafNodeIds)
                            .filter(([key, value])=>{
                                return  value == true;
                            }).map( (node) => parseInt(node[0], 10));

                    console.log(this.selectedNodesId);

                    return theNode;
                }
            }
        }
    }

    constructor(private securityService : SecurityService) {

        this.securityService.getFullMenu().subscribe( data => {
            let menuItems : IMenuSistema[] = data;
            let idNeg : number = -101;

            for(let item of menuItems) {
                let treeNode : ITreeNodeComponent = {
                    id: idNeg--,
                    name: item.name,
                    children: (new MenuUtils()).getMenuItems(item.menuItems, idNeg)
                };

                this.nodes.push(treeNode);
            }

            console.log(this.nodes);
        }, error => {
            console.log('Ocurrio un error en el servicio');
        }, () => {
            console.log('Evento terminado');
        });
    }

    ngAfterViewInit(){
        this.profileCfgTree.treeModel.expandAll();
    }

    ngOnInit() {
    }

}