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
  public procuctosEnCarrito:Producto[]=[];
  constructor(private productservice:ProductsService) {
    this.productos=this.productservice.getProducts();
  }

  public addProductById(id: number){
    this.procuctosEnCarrito.push(this.productservice.getProductById(id));
    console.log(this.procuctosEnCarrito);
  }
}
