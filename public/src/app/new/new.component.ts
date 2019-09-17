import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  new_product : any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.new_product = {title:"", price:"", image:""};
  }

  submitNewProduct(){
    let observable =this._httpService.postNew_Product_Service(this.new_product);
    observable.subscribe(data =>{
      console.log("A NewProduct", data);
      // this.ngOnInit();

    })

  }
}
