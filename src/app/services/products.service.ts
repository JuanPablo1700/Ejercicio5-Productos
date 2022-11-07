import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private productos: Producto[];

  constructor() {

    this.productos=[
      {
        id:"1",
        img:"https://picsum.photos/id/684/600/400",
        name:"Galletas",
        price:15,
        amount:0,
      },
      {
        id:"2",
        img:"https://picsum.photos/id/685/600/400",
        name:"Refresco",
        price:22,
        amount:0,
      },
      {
        id:"3",
        img:"https://picsum.photos/id/686/600/400",
        name:"Papas",
        price:15,
        amount:0,
      }
    ]
   }
   public getProducts(): Producto[]{
    return this.productos;
   }

    public getProductById(id: String) : Producto {
      return {
        ...this.productos.find(producto => {
          producto.amount = producto.amount + 1;
        return producto.id === id;
        })
      }
    }
   
    public addProduct(newProduct: Producto){
      this.productos.push(newProduct);
    }
}
