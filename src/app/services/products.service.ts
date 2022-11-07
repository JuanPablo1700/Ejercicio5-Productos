/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable prefer-const */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/ban-types */
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

    public getProductById(id: String): Producto {
      let item: Producto;
      item = this.productos.find( producto =>{
        return producto.id===id;
      })
      item.amount = item.amount + 1;
      return item;
    }
    public addProduct(newProduct: Producto){
      this.productos.push(newProduct);
    }

}
