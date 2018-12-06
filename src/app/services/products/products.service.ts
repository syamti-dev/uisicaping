import { Injectable } from '@angular/core';
import { IProducto } from 'src/app/classes/interfaces/IProducto';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    private productosList: Array<IProducto> = [];
    
    constructor() { }

    addProduct(prodcuto : IProducto) {
        this.productosList.push(prodcuto);
    }
    
    getProducts() : Array<IProducto> {
        return this.productosList;
    }

}
