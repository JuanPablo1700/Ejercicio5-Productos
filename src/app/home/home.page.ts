import { Cart } from './../model/cart';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  public cart: Cart;

  constructor(
    private productservice:ProductsService,
    private router: Router
  ) {
    this.cart = {
      product_id: "",
      name: "",
      price: 0,
      img: "",
      amount: 0
    }
    
    this.productservice.getProducts().subscribe(res => {
      this.productos = res;
    });
  }

  public getProductById(id: string){
    this.router.navigate(['/view-product'], {
      queryParams: { id: id },
    });
  }

  public addProductToCart(id: string, product: Producto){
    this.cart.product_id = id;
    this.cart.name = product.name;
    this.cart.price = product.price;
    this.cart.img = product.img;
    this.productservice.addCart(this.cart);
  }
}
