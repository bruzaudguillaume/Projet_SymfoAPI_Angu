import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpProviderService } from '../services/http-provider.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-artist-create',
  templateUrl: './artist-create.component.html',
  styleUrls: ['./artist-create.component.scss']
})
export class ArtistCreateComponent implements OnInit {
  createArtistForm: artistForm = new artistForm();

  @ViewChild("employeeForm")
  artistForm!: NgForm;
  isSubmitted: boolean = false;
  constructor(private router: Router, private httpProvider: HttpProviderService) { }

  ngOnInit(): void { }

  CreateArtist(isValid: any) {
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.createArtist(this.createArtistForm).subscribe((data : any) => {
        this.router.navigate(['/ArtistsList'])
      });
    }
  }
}

export class artistForm {
  Name: string = "";
  YearOfBirth: number = 0;
}