import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "http://127.0.0.1:8000";

var httpLink = {
  getAllArtists: apiUrl + "/api/artists",
  getArtistById: apiUrl + "/api/artists",
  deleteArtist: apiUrl + "/api/artists",
  createArtist: apiUrl + "/api/artists",
  updateArtist: apiUrl + "/api/artists"
}
@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {
  constructor(private webApiService: WebApiService) { }

  public getAllArtists(): Observable<any> {
    return this.webApiService.get(httpLink.getAllArtists);
  }

  public getArtistById(artistId: number): Observable<any> {
    return this.webApiService.get(httpLink.getArtistById + '/' + artistId);
  }

  public createArtist(model: any): Observable<any> {
    return this.webApiService.post(httpLink.createArtist, model);
  }  

  public deleteArtist(artistId: number): Observable<any> {
    return this.webApiService.delete(httpLink.deleteArtist + '/' + artistId, "");
  }

  public updateArtist(model: any, artistId: number): Observable<any> {
    return this.webApiService.put(httpLink.updateArtist + '/' + artistId, model);
  }

}                          