import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistsListComponent } from './artists-list/artists-list.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistCreateComponent } from './artist-create/artist-create.component';
import { FormsModule } from '@angular/forms';
import { ArtistUpdateComponent } from './artist-update/artist-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsListComponent,
    ArtistDetailComponent,
    ArtistCreateComponent,
    ArtistUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
