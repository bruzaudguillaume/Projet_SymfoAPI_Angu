import { Component, OnInit } from '@angular/core';
import { ArtistsService } from './services/artist.service';
import { Observable } from 'rxjs';
import { Artist } from './models/artist.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  artists!: Artist[];

  constructor(private artistsService: ArtistsService) {
   }

  ngOnInit() {
    this.artistsService.getArtist().subscribe(next => {
      this.artists = next;
    });
  }
}
