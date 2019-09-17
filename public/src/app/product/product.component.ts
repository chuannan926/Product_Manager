import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  all_product : any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.GetAll_Product();
  }

  GetAll_Product(){
    let observable = this._httpService.GetAll_Product_Service();
    observable.subscribe(data =>{
      console.log("Show_All_Product", data);
      this.all_product = data;
    })
  }

  submitDeleteProduct(Delete_Product_id){
    let observable = this._httpService.deleteProduct_Service(Delete_Product_id);
    observable.subscribe(data =>{
      this.GetAll_Product();
    })

  }
}
