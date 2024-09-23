import { product } from "./product";

 export class Cart {
    private _products: product[] = [];
    private _total: number = 0;

    addToCart(product: product){
        //faz com que se o produto repetir ele não adiciona o mesmo item denovo
        const productInCarts = this._products.includes(product);

if(!productInCarts) {
    this._products.push(product);
}

        this._total += product.price;
    }
    get products(){
        return this._products;
    }
    get total(){
        return this._total;
    }
}
//não é necessário colocar constructor

