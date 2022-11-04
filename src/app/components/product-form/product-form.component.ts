import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {
  readonly productForm: FormGroup = new FormGroup({ name: new FormControl(), price: new FormControl() });

  constructor(private _productsService: ProductsService) {
  }

  onProductFormSubmitted(productForm: FormGroup): void {
    this._productsService.create({
      name: productForm.get("name")?.value,
      price: productForm.get("price")?.value
    })
  }
}

