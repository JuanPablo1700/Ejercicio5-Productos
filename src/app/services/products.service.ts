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
        id:1,
        img:"https://picsum.photos/id/684/600/400",
        name:"Galletas",
        price:15
      },
      {
        id:2,
        img:"https://picsum.photos/id/685/600/400",
        name:"Refresco",
        price:22
      },
      {
        id:3,
        img:"https://picsum.photos/id/686/600/400",
        name:"Papas",
        price:15
      }
    ]
   }
   public getProducts(): Producto[]{
    return this.productos;
   }

    public getProductById(id: number) : Producto {
      return {
        ...this.productos.find(producto => {
        return producto.id === id;
        })
      }
    }
   
}
