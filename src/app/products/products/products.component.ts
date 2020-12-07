import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, DoCheck {
  products: IProduct[];
  title: string;
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      switch (params.type) {
        case 'habanos': this.title = 'HABANOS ПУРИ'; break;
        case 'others': this.title = 'ДРУГИ ПУРИ'; break;
        case 'accessories': this.title = 'АКСЕСОАРИ'; break;
        case 'gourmet': this.title = 'ГУРМЕ'; break;
        case 'special': this.title = 'СПЕЦИАЛНИ ОФЕРТИ'; break;
      }
      this.productService.getAllProducts(params.type).subscribe(products => {
        this.products = products;
      });
    });
  }
}
