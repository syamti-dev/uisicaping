export class Breadcumb {
    title : string;
    description : string; 
    breadcumb : string;
    icon : string;

    constructor(title : string, description : string = "", breadcumb : string, icon : string) {
        this.title = title;
        this.description = description;
        this.breadcumb = breadcumb;
        this.icon = icon;
    }
}