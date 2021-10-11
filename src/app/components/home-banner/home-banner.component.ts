import { Component, OnInit } from '@angular/core';
import { HttpclientService } from 'src/app/services/httpclient.service';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit {

  homedata: any = {};
  constructor(private http: HttpclientService) { }

  ngOnInit(): void {
    this.onGetHomeTile();
  }

  onGetHomeTile()
  {
    this.http.getHomeTitle().subscribe(
      data => {
        this.homedata = data;
        },
      err =>
      {
        console.log(err);
      }
    );
  }

}
