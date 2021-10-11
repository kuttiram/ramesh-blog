import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpclientService } from 'src/app/services/httpclient.service';
import { PagerService } from 'src/app/services/pager.service';

@Component({
  selector: 'app-multi-card',
  templateUrl: './multi-card.component.html',
  styleUrls: ['./multi-card.component.css']
})
export class MultiCardComponent implements OnInit {
  // array of all items to be paged
  allItems: any[] = [];
  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[] = [];
  constructor(private http: HttpclientService, private router: Router, private pagerService: PagerService) { }

  ngOnInit(): void {
    //this.onGetGames();
    this.onGetPosts();
    // this.card.onGetPosts();
    // this.card.$cardEmit
    //     .subscribe((data) => {
    //       this.postList = data;
    //     });
  }

  onGetPosts()
  {
    this.http.getPostList().subscribe(
      data => {
        this.allItems = data as any;
        this.setPage(1);        
        },
      err =>
      {
        console.log(err);
      }
    );
  }

  onDetailNav(e: any)
  {
    e.preventDefault();
    this.router.navigate(['/detail']);
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
