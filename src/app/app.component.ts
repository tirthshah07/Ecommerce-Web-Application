import { Component } from '@angular/core';
import { CartService } from './Pages/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practical-project';
  searchText!: string;

  constructor(private cartService:CartService){}

  ngOnInit(): void {
  }

  cartData = this.cartService.getCartItems();
}
