import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public API_Url: string = 'https://back.test.ferdeleon.com/api/';

  constructor( private _http: HttpClient ) { }

  get_posts(){
    return this._http.get( this.API_Url + 'get_posts' );
  }

  get_post( id: number ){
    return this._http.get( this.API_Url + 'get_post/'+id );
  }
}
