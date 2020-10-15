import { Injectable } from '@angular/core';
import { Http,Response } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }
  
  /**
   * getAlbum
   */
  getAlbum(id:number){
    console.log(this._http.get(this._albumUrl));
    return this._http.get(this._albumUrl).map((response:Response) => {
      response.json()
    });
  }
}
