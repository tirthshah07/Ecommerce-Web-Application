import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {


 productItems: ProductLists[] = [];
  FinalPrice:any
  cartdata:any;
 addToCart(product:ProductLists){
  this.productItems.push(product)
 }
 getCartItems(){
  return this.productItems;
 }

 clearCartItmes(){
  this.productItems = [];
  return this.productItems;
 }
 getTotalPrice(){
 this.cartdata = this.getCartItems();
 for(let i=0; i< this.cartdata.length; i++){
  this.cartdata[i].quantity = 1;
 this.FinalPrice = this.cartdata.map((temp:any)=> temp.price*temp.quantity).reduce((a:any,b:any)=> a+b, 0)
  console.log(this.FinalPrice)
  return this.FinalPrice;
}
 }
}
export interface ProductLists{
  id:number;
  title:any;
  description:any;
  price: any;
  discountPercentage:any;
  rating:any;
  stock:any;
  brand:any;
  category:any;
  thumbnail:any;
  images: {};
  quantity:any
}
