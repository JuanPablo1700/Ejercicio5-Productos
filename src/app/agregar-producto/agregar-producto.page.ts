import { ProductsService } from './../services/products.service';
import { Producto } from './../model/producto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {

  public producto: Producto

  constructor(
    private productsService: ProductsService
  ) {
    this.producto = {
      id: "",
      img:"",
      name: "",
      price: 0
    }
  }

  ngOnInit() {}

  public addProduct() {
    this.productsService.addProduct(this.producto);
    this.producto = {
      id: "",
      img:"",
      name: "",
      price: 0
    }
  }

}
