import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { LoginService } from './services/login.service';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ramesh-blog';
  userIsAuthenticated: boolean = false;
  constructor(private router: Router, private _tokenStorage: TokenStorageService, private _loginService: LoginService) { }

  ngOnInit(): void {
    let _isAuth = this._tokenStorage.getToken();
    if(_isAuth !== undefined && _isAuth !== null && _isAuth !== ""){
      this.userIsAuthenticated = true;
    }
    else{
      this.userIsAuthenticated = false;
    }

    this._loginService.$isLoggedIn
        .subscribe((data) => {
          this.userIsAuthenticated = data;
        });

    this._loginService.$isLoggedOut
        .subscribe((data) => {
          this.userIsAuthenticated = data;
        });    
}

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

  onLogout(e: any)
  {
    e.preventDefault();
    this._loginService.logout();
  }

  onLogingo(e: any){
    e.preventDefault();
    this.router.navigate(['/login'])
  }
}



