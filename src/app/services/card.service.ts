import { EventEmitter, Injectable } from '@angular/core';
import { HttpclientService } from './httpclient.service';
import { PagerService } from './pager.service';

@Injectable({
  providedIn: 'root'
})

export class CardService {
  cardDetails: any = { };
  $cardEmit = new EventEmitter();

  // array of all items to be paged
  allItems: any[] = [];
  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[] = [];

  constructor(private http: HttpclientService, private pagerService: PagerService) { }


  onGetPosts()
  {
    this.http.getPostList()
    .subscribe(
      data => {
        //this.$cardEmit.emit(data);
        this.allItems = data as any;

        // initialize to page 1
        this.setPage(1);
        },
      err =>
      {
        console.log(err);
      }
    );
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    this.cardDetails = { allItems: this.allItems, pager: this.pager, pagedItems: this.pagedItems }
    this.$cardEmit.emit( this.cardDetails );
  }
}
