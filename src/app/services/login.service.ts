import { EventEmitter, Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userIsAuthenticated: boolean = false;
  $isLoggedIn = new EventEmitter();
  $isLoggedOut = new EventEmitter();
  constructor(private authService: AuthService, private _tokenStorage: TokenStorageService, private router: Router) { }

  login(username: string, password: string)
  {
    this.authService.login(username, password).subscribe(
      data => {
        if(data.isSucess)
        {
          this._tokenStorage.saveToken(data.token);
          this._tokenStorage.saveUser(data); 
          this.userIsAuthenticated = true;
          this.$isLoggedIn.emit(this.userIsAuthenticated);
          this.router.navigateByUrl("/home");     
        }
        else
        {
          this.userIsAuthenticated = false;
          this.$isLoggedIn.emit(this.userIsAuthenticated);
          alert("User Name or Password Incorrect");
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  logout()
  {
    this._tokenStorage.removeToken();
    this.userIsAuthenticated = false;
    this.$isLoggedOut.emit(this.userIsAuthenticated);
    this.router.navigateByUrl('/login');
  }
}
