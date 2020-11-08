import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public posts: any;

  constructor( private _api: ApiService ) { }

  ngOnInit(): void {
    this.get_the_posts();
  }

  private get_the_posts(){
    this._api.get_posts().subscribe( data => {
      this.posts = data;
    });
  }

}
