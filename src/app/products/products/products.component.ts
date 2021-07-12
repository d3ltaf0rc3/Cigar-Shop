import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { IProduct } from 'src/app/shared/interfaces/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: IProduct[];
  title: string;
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        tap((params) => {
          this.products = null;
          switch (params.type) {
            case 'habanos': this.title = 'HABANOS ПУРИ'; break;
            case 'others': this.title = 'ДРУГИ ПУРИ'; break;
            case 'accessories': this.title = 'АКСЕСОАРИ'; break;
            case 'gourmet': this.title = 'ГУРМЕ'; break;
            case 'special': this.title = 'СПЕЦИАЛНИ ОФЕРТИ'; break;
          }
        }),
        switchMap((params) => this.productService.getAllProducts(params.type))
      )
      .subscribe(res => {
        this.products = res.data;
      });
  }
}
