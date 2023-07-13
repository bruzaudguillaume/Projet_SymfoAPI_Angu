import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsListComponent } from './artists-list/artists-list.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistCreateComponent } from './artist-create/artist-create.component';
import { ArtistUpdateComponent } from './artist-update/artist-update.component';

const routes: Routes = [
  { path: '', redirectTo: 'ArtistsList', pathMatch: 'full'},
  { path: 'ArtistsList', component: ArtistsListComponent },
  { path: 'ArtistDetail/:artistId', component: ArtistDetailComponent },
  { path: 'CreateArtist', component: ArtistCreateComponent },
  { path: 'UpdateArtist/:artistId', component: ArtistUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
