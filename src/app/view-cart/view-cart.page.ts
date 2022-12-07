import { Cart } from './../model/cart';
import { ProductsService } from './../services/products.service';
import { Producto } from './../model/producto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.page.html',
  styleUrls: ['./view-cart.page.scss'],
})
export class ViewCartPage implements OnInit {

  cartList: Cart[];

  total: number;

  constructor(
    private productsService: ProductsService
  ) {
    this.cartList = []
    this.total = 0;
  }

  ngOnInit() {
    this.productsService.getCarts().subscribe(res => {
      this.cartList = res;
    });
  }
  public refresh(){
    this.total = 0;
    for (let index = 0; index < this.cartList.length; index++) {
      let price = this.cartList[index].price;
      let amount = this.cartList[index].amount;
      this.total += price * amount;
    }
  }

  public removeProductFromCart(id: string){
    this.productsService.removeProductFromCart(id);
  }
}
