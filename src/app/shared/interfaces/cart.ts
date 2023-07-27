export interface Cart {
    numOfCartItems:number,
    data:Data
}
 interface Data {
    productCartPrice:number,
    totalCartPrice:number,
    products:Products[],
    _id:string


}
interface Products{
    count:number,
    price:number,
    product:ProductDetails
}
interface ProductDetails{
id:string,
title:string,
imageCover:string,
}
