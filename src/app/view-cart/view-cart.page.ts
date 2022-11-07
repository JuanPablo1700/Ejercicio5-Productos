/* eslint-disable radix */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/prefer-for-of */
import { ProductsService } from './../services/products.service';
import { Producto } from './../model/producto';
import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.page.html',
  styleUrls: ['./view-cart.page.scss'],
})
export class ViewCartPage implements OnInit {

  productList: Producto[];

  total: number;

  constructor(
    private productsService: ProductsService, private home: HomePage
  ) {
    this.total = 0;
  }

  ngOnInit() {
    this.productList = this.home.procuctosEnCarrito;
    for (let index = 0; index < this.productList.length; index++) {
      let price = this.productList[index].price;
      let amount = this.productList[index].amount;
      this.total += price * amount;
    }
  }
  public removeProductFromCart(id: string){
    this.productList.splice(parseInt(id),1);
    this.total = 0;
    for (let index = 0; index < this.productList.length; index++) {
      let price = this.productList[index].price;
      let amount = this.productList[index].amount;
      this.total += price * amount;
    }
  }
}
