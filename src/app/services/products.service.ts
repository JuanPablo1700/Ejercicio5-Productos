import { Producto } from './../model/producto';
import { Injectable } from '@angular/core';
import { Cart } from '../model/cart';
import { map } from "rxjs/operators";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from 'rxjs';
import { actionSheetController } from '@ionic/core';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private product: Producto;
  private cart: Cart;
  private cartProducts: Cart[];

  constructor(
    private firestore: AngularFirestore
  ) {
    /* this.productos=[
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
    ] */
  }

  public getProducts(): Observable<Producto[]> {
    return this.firestore.collection('products').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Producto;
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    )
  }

  public getCarts(): Observable<Cart[]> {
    return this.firestore.collection('carts').snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Cart;
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );
  }

  public getProductById(id: string) {
    let result = this.firestore.collection('products').doc(id).valueChanges();
    return result;
  }

  public getCartsByProductId(product_id: string){
    return this.firestore.collection('carts').doc(product_id).valueChanges();
  }

  public addProduct(newProduct: Producto){
    this.firestore.collection('products').add(newProduct);
  }

  public addCart(newCart: Cart) {
    let actualizado: boolean;
    this.getCarts().subscribe( res => {
      this.cartProducts = res;
    });
    actualizado = false;
    this.cartProducts.forEach(item => {
      if (item.product_id === newCart.product_id) {
        newCart.amount = item.amount + 1;
        this.updateCart(item.id, newCart.amount);
        actualizado = true;
      }
    });

    if (actualizado === false) {
      newCart.amount = 1;
      this.firestore.collection('carts').add(newCart);
    }
    
  }

  public updateCart(id: string, amount: number) {
    this.firestore.collection('carts').doc(id).update({
      amount: amount
    });
  }

  public removeProductFromCart(id: string) {
    this.firestore.collection('carts').doc(id).delete();
  }
}
