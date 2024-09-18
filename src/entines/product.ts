import { v4 as uuidv4 } from 'uuid';

export class product {

    private _id:string = uuidv4();
    private _name:string;
    private _category:string;
    private _price:number;
    private _imageurl:string;

    constructor(name: string,
        category: string,
        price: number,
        imageurl:string
    ){
this._name = name;
this._category = category;
this._price = price;
this._imageurl = imageurl;


    }
}