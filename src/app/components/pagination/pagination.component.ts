import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  postList: any = {};
  constructor(private card: CardService) { }

  ngOnInit(): void {
    this.card.$cardEmit
        .subscribe((data) => {
          this.postList = data;
          console.log(this.postList);
        });
  }

  setPage(pageid: number)
  {
    this.card.setPage(pageid);
    console.log(pageid);
  }

}
