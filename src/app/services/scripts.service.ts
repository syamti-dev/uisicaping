import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ScriptsService {
    constructor() {}

    loadScript(urlInAssetsJs: string) {
        return new Promise( (resolve, reject) => {
            let body = <HTMLDivElement> document.body;
            let script = document.createElement('script');
            script.innerHTML = '';
            script.type = 'text/javascript';
            script.src = `assets/js/${urlInAssetsJs}`;
            script.charset = 'utf-8';
            script.async = true;
            script.defer = true;
            body.appendChild(script);
            resolve();
        });        
    }
}
