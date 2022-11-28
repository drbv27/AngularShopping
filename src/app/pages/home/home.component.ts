import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../components/product/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = null;

  // = [
  //   {
  //     _id: '1',
  //     name: 'Camiseta',
  //     avaliableQuantity: 5,
  //     price: 20555,
  //     description: 'Camiseta tipo polo...',
  //     createdAt: 'sadf',
  //     updatedAt: 'sadf',
  //   },
  // ]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://shopping-node.vercel.app/api/product")
      .subscribe(
        result => {
           this.products = result;
        },
        error => {
          console.log(error);
        }
      );
  }

}
