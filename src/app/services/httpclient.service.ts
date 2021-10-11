import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';
import { map } from 'rxjs/operators';

const headers = new HttpHeaders();
headers.append('Access-Control-Allow-Headers', 'Content-Type');
headers.append('Access-Control-Allow-Methods', 'GET');
headers.append('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private http: HttpClient) { }

  getGameList(ordering: string, search: string): Observable<any>{
    let params = new HttpParams().set('ordering', ordering).set('search', search);
    // const apiHeader: HttpHeaders = new HttpHeaders({
    //   Authorization: 'Bearer JWT-token'
    // });
    // return this.http.get<APIResponse<Game>>(`${environment.apiUrl}Games`+ params,{headers: apiHeader}).pipe(
    //   catchError(this.handleError)
    // );
    return this.http.get(`${environment.apiUrl}Games`,{ headers: headers });
  }

  getHomeTitle()
  {
    return this.http.get(`${environment.apiUrl}Home/GetTitle`,{ headers: headers });
  }

  getHomeBanner()
  {
    return this.http.get(`${environment.apiUrl}Home/GetBanner`,{ headers: headers });
  }

  getPostList()
  {
    return this.http.get(`${environment.apiUrl}Home/GetBannerList`,{ headers: headers });
  }

  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
