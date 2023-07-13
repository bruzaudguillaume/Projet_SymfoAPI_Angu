import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../services/http-provider.service';

@Component({
  selector: 'app-artist-update',
  templateUrl: './artist-update.component.html',
  styleUrls: ['./artist-update.component.scss']
})
export class ArtistUpdateComponent implements OnInit {
  updateArtistForm: artistForm = new artistForm();

  @ViewChild("artistForm")
  employeeForm!: NgForm;
  isSubmitted: boolean = false;
  artistId: any;

  constructor(private route: ActivatedRoute, private router: Router,
    private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.artistId = this.route.snapshot.params['artistId'];
    this.getArtistDetail();
  }
  getArtistDetail() {
    this.httpProvider.getArtistById(this.artistId).subscribe((data: any) => {
      this.updateArtistForm.Id = data.id;
      this.updateArtistForm.Name = data.name;
      this.updateArtistForm.YearOfBirth = data.yearOfBirth;
    });
  }

  UpdateArtist(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.updateArtist(this.updateArtistForm, this.artistId).subscribe(async data => {
        this.router.navigate([`ArtistDetail/${this.artistId}`]);
      });
    }
  }
}

export class artistForm {
  Id: number = 0;
  Name: string = "";
  YearOfBirth: number = 0;
}
