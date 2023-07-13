import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  constructor(private httpClient: HttpClient) { }

  // Get call method
  get(url: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'c31z'
      }),
    };
    return this.httpClient.get(
      url,
      httpOptions
    )
      .pipe(
        map((response: any) => this.ReturnResponseData(response))
      );
  }

  // Post call method 
  post(url: string, model: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'c31z'
      }), 
    };
    return this.httpClient.post(
      url,
      model,
      httpOptions)
      .pipe(
        map((response: any) => this.ReturnResponseData(response)),
      );
  }

    // Delete call method 
    delete(url: string, model: any): Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'c31z'
        }), 
      };
      return this.httpClient.delete(
        url,
        httpOptions)
    }

    // Put call method 
    put(url: string, model: any): Observable<any> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'c31z'
        }), 
      };
      return this.httpClient.put(
        url,
        model,
        httpOptions)
    }

  private ReturnResponseData(response: any) {
    return response;
  }

}
