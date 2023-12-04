import { Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
   finalList:any;
  //  InitalCartValue:number = 1;
  //  finalCartValue:any = 1;
  TotalValue:any;
  totalValueSub:any;
  ShowForm!:boolean;

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });


  constructor(private cartService:CartService, private formBuilder: FormBuilder){}

  ngOnInit(): void {
    for(let i=0; i<this.cartData.length; i++){
      this.cartData[i].quantity = 1;
     this.TotalValue = this.cartData.map((temp)=> temp.price*temp.quantity).reduce((a,b)=> a+b, 0)
      console.log(this.TotalValue)
    }
    }
cartData = this.cartService.getCartItems();

onSubmit(): void {
  // Process checkout data here
  this.cartData = this.cartService.clearCartItmes();
  console.warn('Your order has been submitted', this.checkoutForm.value);
  this.checkoutForm.reset();
  this.TotalValue = 0;
  this.ShowForm = false
}


quantityCounterIncrement(data:any){
  console.log(data.quantity)
  if(data.quantity){
    data.quantity += 1
  }
  this.TotalValue = this.cartData.map((temp)=> temp.price*temp.quantity).reduce((a,b)=> a+b, 0);
  localStorage.setItem('price', this.TotalValue);
}
quantityCounterDecrement(data:any){
  if(data.quantity > 1){
    data.quantity -= 1
  }
  this.TotalValue = -(this.cartData.map((temp)=> temp.price*temp.quantity).reduce((a,b)=> a-b, 0));
  localStorage.setItem('price', this.TotalValue);
 
}

saveUserData(){
 this.ShowForm = true;
}
  }

  
  

