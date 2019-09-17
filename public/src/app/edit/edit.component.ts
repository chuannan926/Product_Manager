import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
current_product : any;
Product_id : any;


  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this.current_product = {name :""};
    this._route.params.subscribe((params: Params) =>{
      console.log(params['id'])
      this.Product_id = params['id'];
    });

    let observable = this._httpService.getOne_Product_Service(this.Product_id)
    observable.subscribe(data =>{
      console.log(data);
      this.current_product = data;
    })
  }
  
  editCurrent_Product(){
    let observable = this._httpService.update_Current_Product(this.Product_id, this.current_product)
    observable.subscribe(data =>{
      console.log(data + "editing data is hereeeeeee")
      this.current_product = data;
      this.ngOnInit();
    })
  }

  submitDeleteProduct(Delete_Product_id){
    console.log("DeleteProduct right now")
    let observable = this._httpService.deleteProduct_Service(Delete_Product_id);
    observable.subscribe(data =>{
      //怎么删完了回到所有product那页
    })
  }




}
