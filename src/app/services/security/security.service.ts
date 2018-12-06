import { Injectable } from '@angular/core';
import { IMenuSistema } from 'src/app/classes/interfaces/IMenuSistema';
import { Observable } from 'rxjs';

import * as _CryptoJS from 'crypto-js';
import { Constants } from 'src/app/classes/classes/Constants';

@Injectable({
    providedIn: 'root'
})
export class SecurityService {

    constructor() {
    }

    getFullMenu() : Observable<Array<IMenuSistema>> {
        return new Observable( (observer) => {
            let data = [
                {
                    "name": "Inventarios",
                    "description": "Sistema de inventarios",
                    "menuItems": [
                        {
                            "id": 1,
                            "name": "Bienes",
                            "description": "Bienes",
                            "url": "/",
                            "faIcon": "exclamation",
                            "menuItems": [
                                {
                                    "id": 2,
                                    "name": "Altas",
                                    "description": "Altas",
                                    "url": "/goods/add",
                                    "faIcon": null,
                                    "menuItems": []
                                },
                                {
                                    "id": 3,
                                    "name": "Consulta/Modificación",
                                    "description": "Consulta/Modificación",
                                    "url": "/goods/modify",
                                    "faIcon": null,
                                    "menuItems": []
                                },
                                {
                                    "id": 4,
                                    "name": "Bajas",
                                    "description": "Bajas",
                                    "url": "/goods/delete",
                                    "faIcon": null,
                                    "menuItems": []
                                }
                            ]
                        },
                        {
                            "id": 5,
                            "name": "Vehiculos",
                            "description": "Vehiculos",
                            "url": "/",
                            "faIcon": "car",
                            "menuItems": [
                                {
                                    "id": 6,
                                    "name": "Altas",
                                    "description": "Altas",
                                    "url": "/vehicles/add",
                                    "faIcon": null,
                                    "menuItems": []
                                },
                                {
                                    "id": 7,
                                    "name": "Consulta/Modificación",
                                    "description": "Consulta/Modificación",
                                    "url": "/vehicles/modify",
                                    "faIcon": null,
                                    "menuItems": []
                                },
                                {
                                    "id": 8,
                                    "name": "Bajas",
                                    "description": "Bajas",
                                    "url": "/vehicles/delete",
                                    "faIcon": null,
                                    "menuItems": []
                                }
                            ]
                        },
                        {
                            "id": 9,
                            "name": "Reportes",
                            "description": "Reportes",
                            "url": "/goods/reports",
                            "faIcon": "file-contract ",
                            "menuItems": []
                        },
                        {
                            "id": 10,
                            "name": "Etiquetas",
                            "description": "Etiquetas",
                            "url": "/goods/barcodes",
                            "faIcon": "barcode ",
                            "menuItems": []
                        }
                    ],
                    "isHeader": true
                },
                {
                    "name": "Catalogos",
                    "description": "Administración de catalogos",
                    "menuItems": [
                        {
                            "id": 91,
                            "name": "Resguardantes",
                            "description": "Resguardantes",
                            "url": "/catalogs/guarders",
                            "faIcon": "user-shield",
                            "menuItems": []
                        },
                        {
                            "id": 92,
                            "name": "Áreas",
                            "description": "Áreas",
                            "url": "/",
                            "faIcon": "sitemap",
                            "menuItems": [
                                {
                                    "id": 93,
                                    "name": "Direcciones",
                                    "description": "Direcciones",
                                    "url": "/catalogs/addresses",
                                    "faIcon": null,
                                    "menuItems": []
                                },
                                {
                                    "id": 94,
                                    "name": "Departamentos",
                                    "description": "Departamentos",
                                    "url": "/catalogs/departaments",
                                    "faIcon": null,
                                    "menuItems": []
                                }
                            ]
                        },
                        {
                            "id": 95,
                            "name": "Clasificaciones",
                            "description": "Clasificaciones",
                            "url": "/catalogs/classifications",
                            "faIcon": "check-double ",
                            "menuItems": []
                        },
                        {
                            "id": 96,
                            "name": "Marcas",
                            "description": "Marcas",
                            "url": "/catalogs/brands",
                            "faIcon": "registered",
                            "menuItems": []
                        },
                        {
                            "id": 97,
                            "name": "Materiales",
                            "description": "Materiales",
                            "url": "/catalogs/equipment",
                            "faIcon": "exclamation",
                            "menuItems": []
                        },
                        {
                            "id": 98,
                            "name": "Colores",
                            "description": "Colores",
                            "url": "/catalogs/colors",
                            "faIcon": "palette",
                            "menuItems": []
                        },
                        {
                            "id": 99,
                            "name": "Proveedores",
                            "description": "Proveedores",
                            "url": "/catalogs/providers",
                            "faIcon": "shopping-cart",
                            "menuItems": []
                        }
                    ],
                    "isHeader": true
                }
            ];

            observer.next(data);
            observer.complete();

        });
    }

    doLogin(username : string, password : string) : Observable<any>{
        return new Observable( (observer) => {
            console.log(username, password);

            let key = _CryptoJS.enc.Hex.parse("K3yHex_3re@!");
            let iv = _CryptoJS.enc.Hex.parse("2811da22377d62fcfdb02f29aad77d9e"); 
            let encrypted = _CryptoJS.AES.encrypt(password, key, {
                iv: iv,
                mode: _CryptoJS.mode.ECB,
                padding: _CryptoJS.pad.NoPadding
            });

            let encryptedText = _CryptoJS.enc.Hex.stringify(encrypted.ciphertext);

            localStorage.setItem(Constants.LOGGEDIN, encryptedText);

            observer.next(encryptedText);
            observer.complete();

        });
    }


    doLogout() : Observable<any>{
        return new Observable( (observer) => {
            localStorage.removeItem(Constants.LOGGEDIN);

            observer.next();
            observer.complete();

        });
    }
}
