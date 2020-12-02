export class Post{
    public title: string;
    public author: string;
    public date: Date;
    public details: string;
    public imgPath: string;

    constructor(title: string, author: string, date: Date, details: string, imgpath: string){
        this.title = title;
        this.author = author;
        this.date = date;
        this.details = details;
        this.imgPath = imgpath;
    }
}