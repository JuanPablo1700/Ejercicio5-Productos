import { Component } from '@angular/core';
import { Producto } from '../model/producto';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public productos:Producto[];
  public productosEnCarrito:Producto[]=[];
  constructor(private productservice:ProductsService) {
    this.productos=this.productservice.getProducts();
  }

  public addProductById(id: string){
    this.productosEnCarrito.push(this.productservice.getProductById(id));
    this.productservice.setCartProducts(this.productosEnCarrito);
  }
}
