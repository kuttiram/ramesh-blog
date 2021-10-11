import { Component, OnInit } from '@angular/core';
import { HttpclientService } from 'src/app/services/httpclient.service';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss']
})
export class BigCardComponent implements OnInit {

  bannerData: any = {};
  imageUrl: string ='';
  constructor(private http: HttpclientService) { }

  ngOnInit(): void {
    this.onGetBigBanner();
  }

  onGetBigBanner()
  {
    this.http.getHomeBanner().subscribe(
      data => {
        this.bannerData = data;
        this.imageUrl = this.bannerData.pageImages[0].imageUrl;
        },
      err =>
      {
        console.log(err);
      }
    );
  }

}
