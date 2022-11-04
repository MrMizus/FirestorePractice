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

  create(product: ProductsModel) {
    return of(addDoc(this.productsCollection, product));
  }

  delete(name: string) {
    const productDocumentReference = doc(this._firestore, `product/${name}`);
    return of(deleteDoc(productDocumentReference));
  }
}
