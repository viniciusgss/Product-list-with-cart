import { v4 as uuidv4 } from 'uuid';
import { Cart } from './cart';

export class product {

    private _id:string = uuidv4();
    private _name:string;
    private _category:string;
    private _price:number;
    private _imageurl:string;
    private _quantity : number = 0;
    private _total: number = 0;

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

calculateTotal(){
    this._total = this._quantity *this._price;
}

incrementQuantity(){

    this._quantity++;
    this.calculateTotal();

    Cart.addToCart(this);
}

decrementQuantity(){
    this._quantity--;
    this.calculateTotal();

    Cart.addToCart(this);
}

    get price(){
        return this._price;
    }
}