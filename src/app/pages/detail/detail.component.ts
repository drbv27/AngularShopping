import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  id: string;
  product: any;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( (parametros: ParamMap) => {
      this.id = parametros.get('id');
    });

    this.http.get(`https://shopping-node.vercel.app/api/product/${this.id}`)
      .subscribe(
        result => {
          this.product = result;
        },
        error => {
          console.log(error);
        }
      );
  }

}
