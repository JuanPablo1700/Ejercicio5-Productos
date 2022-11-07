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
    private productsService: ProductsService,
  ) {
    this.total = 0;
  }

  ngOnInit() {
    this.productList = this.productsService.getProducts();
    for (let index = 0; index < this.productList.length; index++) {
      let price = this.productList[index].price;
      let amount = this.productList[index].amount;
      this.total += price * amount;
    }
  }

}
