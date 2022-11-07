import { ProductsService } from './../services/products.service';
import { Producto } from './../model/producto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.page.html',
  styleUrls: ['./view-cart.page.scss'],
})
export class ViewCartPage implements OnInit {

  productList: Producto[];

  total: number;

  constructor(
    private productsService: ProductsService
  ) {
    this.total = 0;
  }

  ngOnInit() {
    this.productList = this.productsService.getCartProducts();
    for (let index = 0; index < this.productList.length; index++) {
      let price = this.productList[index].price;
      let amount = this.productList[index].amount;
      this.total += price * amount;
    }
  }
  public removeProductFromCart(id: string){
    this.productsService.removeProductFromCart(id);
    this.productList = this.productsService.getCartProducts();
    this.total = 0;
    for (let index = 0; index < this.productList.length; index++) {
      let price = this.productList[index].price;
      let amount = this.productList[index].amount;
      this.total += price * amount;
    }
  }
}
