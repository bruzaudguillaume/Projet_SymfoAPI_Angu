import { Component, OnInit } from '@angular/core';
import { WebApiService } from '../services/web-api.service';
import { HttpProviderService } from '../services/http-provider.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {

  artistId: any;
  artistDetail : any= [];
   
  constructor(public webApiService: WebApiService, private route: ActivatedRoute, private httpProvider : HttpProviderService) { }
  
  ngOnInit(): void {
    this.artistId = this.route.snapshot.params['artistId'];      
    this.getArtistDetailById();
  }

  getArtistDetailById() {           
    this.httpProvider.getArtistById(this.artistId).subscribe(next => {
      this.artistDetail = next;
    });
  }
}
