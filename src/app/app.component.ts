import { Component, OnInit  } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ramesh-blog';

  constructor() { }

  ngAfterViewInit(): void {
    $(document).ready(function(){
      $('#check').on('click', function () {
        if (!$(this).is(':checked')) {
          $('#content').toggleClass('cactive');
          $('#content').removeClass('col-md-6');
          $('#content').addClass('col-md-8');
        }
        else{
          $('#content').toggleClass('cactive');
          $('#content').removeClass('col-md-8');
          $('#content').addClass('col-md-6');
        }
      });
    });
  }
}



