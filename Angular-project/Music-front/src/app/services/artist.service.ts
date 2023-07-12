import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from '../models/artist.model';

// Set the http options
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json", "Authorization": "c31z" })
};

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  url = "http://127.0.0.1:8000/api/artists";

  constructor(private http: HttpClient) { }

  /**
   * Function to extract the data when the server return some
   *
   * @param res
   */
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  /**
   * Function to GET what you want
   *
   * @param url
   */
  public getArtist(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.url, httpOptions);
  }

  public deleteArtist(id: number): Observable<any> {
    return this.http.delete(this.url, httpOptions);
  }


}