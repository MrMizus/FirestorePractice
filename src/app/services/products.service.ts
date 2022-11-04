import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { ProductsModel } from '../models/products.model';
import { CollectionReference, addDoc, collection, doc, deleteDoc } from '@firebase/firestore';
import { Firestore, collectionData } from '@angular/fire/firestore';

@Injectable()
export class ProductsService {
  private readonly productsCollection: CollectionReference;

  constructor(private _firestore: Firestore) {
    this.productsCollection = collection(this._firestore, 'products');
  }

  getAll(): Observable<ProductsModel[]> {
    return collectionData(this.productsCollection, {
      idField: 'id',
    }) as Observable<ProductsModel[]>;
  }

  create(product: Omit<ProductsModel, "id">){
    return of(addDoc(this.productsCollection, product));
  }

  delete(id: string) {
    const productDocumentReference = doc(this._firestore, `products/${id}`);
    console.log(productDocumentReference)
    return of(deleteDoc(productDocumentReference));
  }
}
