import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  public post: any;
  public post_id:any;

  constructor(
    private _api: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {

    this.post_id = this.route.snapshot.paramMap.get('id');

    this.get_the_post( this.post_id );
  }

  private get_the_post( id ){
    this._api.get_post( id ).subscribe( data => {
      this.post = data;
    });
  }

}
