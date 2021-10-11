import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  token: string = "";
  constructor(private _tokenService: TokenStorageService, private _router: Router, private http: HttpClient){

  }

  async canActivate() {
    this.token = this._tokenService.getToken();
    //console.log(this._authService.validateToken(token).toPromise());
    const result : any =  await this.http.get(`${environment.apiUrl}Users/validatetoken?token=`+this.token).toPromise(); 
    if(!!this.token && result.isValid){
      return true;
    }
    else{
      this._router.navigate(['']);
      return false;
    }    
  }

  // async validate()
  // {
  //   return await this._authService.validateToken(this.token).toPromise().then(
  //     data => {
  //       this.logError = data
  //       },
  //     err =>
  //     {
  //       console.log(err);
  //     });
  // }
  
}
