import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { HttpClient } from '@angular/common/http';
import { CartService, ProductLists } from '../cart/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
cartList!:any[];
url = 'https://dummyjson.com/products';
paramSearch = 'skip=';
defalutValue =0;
parampage='limit='
defalutvalue = 9;
searchText!: string;
itemList:any;

//converting to dynamic string
mainUrl =`${this.url}?${this.paramSearch}${this.defalutValue}&${this.parampage}${this.defalutvalue}`


product ={
  id:0,
  title:'',
  description:'',
  price: '',
  discountPercentage:'',
  rating:'',
  stock:'',
  brand:'',
  category:'',
  thumbnail:'',
  images: {}
}
 ProductList!:any;
 

  constructor(private http:HttpClient, private cartService:CartService){}


  ngOnInit(): void {
    this.http.get(this.mainUrl).subscribe((Response)=>{
      let resSTR = JSON.stringify(Response);
      let resJson = JSON.parse(resSTR)
      this.ProductList = resJson

    })
    return this.ProductList;
  }
  
//loading more data on button click
  loadMoredata(){
    if(this.defalutValue === 0 && this.defalutvalue === 9){
      this.defalutValue+=0;
      this.defalutvalue += 9;
      this.mainUrl =`${this.url}?${this.paramSearch}${this.defalutValue}&${this.parampage}${this.defalutvalue}`;
      console.log(this.mainUrl)
      this.http.get(this.mainUrl).subscribe((Response)=>{
        console.log(Response)
        this.ProductList = Response
      })
    }
  else{
    this.defalutValue +=0;
    this.defalutvalue += 9;
    this.mainUrl =`${this.url}?${this.paramSearch}${this.defalutValue}&${this.parampage}${this.defalutvalue}`
    console.log(this.mainUrl)
    this.http.get(this.mainUrl).subscribe((Response)=>{
      console.log(Response)
      this.ProductList = Response
    })
  }
  

  }

  addToCart(product:ProductLists){
  // console.log(product);
   this.itemList = this.cartService.getCartItems();
    let duplicateValue = false;
    for(let i=0; i<this.itemList.length; i++){
      console.log(product.id, this.itemList[i].id);
      if(product.id === this.itemList[i].id){
       
        
        duplicateValue = true;
        window.alert('Items Already in Cart');
        break
        
      }
    }
    console.log(duplicateValue);
    
   if(!duplicateValue){
    this.cartService.addToCart(product);
    window.alert('Items added to cart successfully');
  }
   //}
  // }else{

  //  for(let i =0; i<this.itemList.length; i++){
  //  if(product.id === this.itemList[i].id) {
  //   
  //   console.log(this.itemList);
  //   break
  //  }
  //  else{
  //   this.cartService.addToCart(product);
  //    window.alert('Items added to cart successfully');
  //    break
  //  }
  //  }
  // }
  //  if(this.itemList.length === 0){
  //   this.cartService.addToCart(product);
  //   window.alert('Items added to cart successfully');
  //   console.log(this.itemList);
    
  //  }
  //  else if(this.itemList.length>0){
  //   for(let i=0; i<this.itemList.length; i++){
  //     if(product.id === this.itemList[i].id){
  //       console.log(product.id, this.itemList[i].id)
  //       console.log(this.itemList);
  //       window.alert('Items Already in Cart');
  //       break
  //     }
  //     // else{
  //     //   if(product.id === this.itemList[i].id){
  //     //   this.cartService.addToCart(product);
  //     //   window.alert('Items added to cart successfully');
  //     //   console.log(this.itemList);
  //     //   break
  //     // }
  //     // }
  //   }
  //  }
  //  else{
  //   this.cartService.addToCart(product);
  //       window.alert('Items added to cart successfully');
  //       console.log(this.itemList);
  //  }
  //  else{
  //   for(let i=0; i<this.itemList.length; i++){

  //   }
   }
//    if(this.itemList.length === 0){
//    //console.log(this.itemList.length)
//    this.cartService.addToCart(product);
//    window.alert('Items added to cart successfully');
//    console.log(this.itemList)
//   }else{
   
//     for(let i=0; i<this.itemList.length; i++){
//     if(product.id === this.itemList[i].id){
//       window.alert('Items Already in Cart')
//       console.log(this.itemList)
//     }
//     else{
//     this.cartService.addToCart(product);
//     window.alert('Items added to cart successfully');
//     break
//     // console.log(this.itemList)
//   }
// }
//   }


  notifyMe(){
    window.alert('You will be notified once Product is available')
  }

  filterforproduct(event:any){

  }
}
