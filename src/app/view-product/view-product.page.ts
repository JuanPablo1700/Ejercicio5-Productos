import { ProductsService } from './../services/products.service';
import { Producto } from './../model/producto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.page.html',
  styleUrls: ['./view-product.page.scss'],
})
export class ViewProductPage implements OnInit {

  product: Producto

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) { 
    this.product = {
      name: '',
      price: 0,
      img: ''
    }
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.productsService.getProductById(params.id).subscribe(item => {
        this.product = item as Producto;
      })
    })
  }

}
