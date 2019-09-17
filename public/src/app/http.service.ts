import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  
  GetAll_Product_Service(){
    console.log("Service at GetAll_Product_Service in service.ts");
    return this._http.get('/api/products')
  }

  postNew_Product_Service(new_product){
    console.log("Service at postNew_Product_Service in service.ts",new_product);
    return this._http.post('/api/new_products',new_product)
  }

  getOne_Product_Service(ProductID){
    console.log("ProductID at getOne_Product_Service", ProductID);
    return this._http.get('/api/' + ProductID)
  }

  update_Current_Product(ProductID, update_Current_Product){
    console.log("ProductID at update_Current_Product", ProductID);
    return this._http.patch('/api/edit/'+ProductID, update_Current_Product)
  }
  deleteProduct_Service(ProductID){
    return this._http.delete('/api/delete/'+ProductID)
  }
}