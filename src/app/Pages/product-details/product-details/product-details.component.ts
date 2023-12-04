import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService, ProductLists } from '../../cart/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  productList!:ProductLists[];
  product!:any

  url = 'https://dummyjson.com/products';
  itemList: any;
// paramSearch = 'skip=';
// defalutValue =0;
// parampage='limit='
// defalutvalue = 9;
// searchText: any;

//converting to dynamic string
// mainUrl =`${this.url}?${this.paramSearch}${this.defalutValue}&${this.parampage}${this.defalutvalue}`

  constructor(private route:ActivatedRoute, private cartService:CartService, private http:HttpClient){}
  ngOnInit(): void {
   
    this.getProductDetailsList();
    setTimeout(()=>{
      if(this.productList === undefined){
        console.log("error")
      }
      else{
        const routparams = this.route.snapshot.paramMap;
        const productIdFromRoute = Number(routparams.get('productId'));
        console.log(productIdFromRoute)
    
        this.product = this.productList.find((product)=> product.id === productIdFromRoute)
        console.log(this.product);
        
      }
    },1000)
    
   

  }
getProductDetailsList(){
  this.http.get(this.url).subscribe((Response)=>{
    // console.log(Response)
    let resSTR = JSON.stringify(Response);
    let resJson = JSON.parse(resSTR)
    console.log(resJson["products"])
     this.productList = resJson["products"]
  })
}
  addToCart(product:ProductLists){

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
  }
  notifyMe(){
    window.alert('You will be notified once Product is available')
  }

}
