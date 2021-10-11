import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const httpOptions ={
  headers: new HttpHeaders({"Content-Type": 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(userName: string, password: string): Observable<any>{
    return this.http.post(`${environment.apiUrl}Users/authenticate`,{
      username: userName,
      password: password
    }, httpOptions);    
  }

// async validateToken(jwtToken: string){
//     return await this.http.get(`${environment.apiUrl}Users/validatetoken?token=`+jwtToken, httpOptions).toPromise();
//   }

//   verifyToken(jwtToken: string): Observable<any> {
//     return jwtToken ? this.http
//     .get(`${environment.apiUrl}Users/validatetoken?token=`+jwtToken)
//       .pipe( 
//         map(
//           res => { return JSON.stringify(res) }
//         )
//       ) : of(false)
//   }
}
