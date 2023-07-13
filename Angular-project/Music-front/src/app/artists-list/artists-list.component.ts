import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpProviderService } from '../services/http-provider.service';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.scss']
})
export class ArtistsListComponent implements OnInit {

  closeResult = '';
  artistsList: any = [];

  constructor(private router: Router, private httpProvider: HttpProviderService) { }

  ngOnInit(): void {
    this.httpProvider.getAllArtists().subscribe(next => {
      this.artistsList = next;
    });
  }

  CreateArtist() {
    this.router.navigate(['CreateArtist']);
  }


  deleteArtist(artist: any) {
    this.httpProvider.deleteArtist(artist.id).subscribe((data: any) => {
      this.router.navigate([''])
      .then(() => {
        window.location.reload(); // reload windows to see missing deleted element
      });
      console.log("OK");
    });
  }


  /*   async getAllArtists() {
      this.httpProvider.getAllArtists().subscribe((data : any) => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData) {
            this.artistsList = resultData;
          }
        }
      });
    }
  
    AddEmployee() {
      this.router.navigate(['AddEmployee']);
    }
  
    deleteEmployeeConfirmation(employee: any) {
      this.modalService.open(MODALS['deleteModal'],
        {
          ariaLabelledBy: 'modal-basic-title'
        }).result.then((result) => {
          this.deleteEmployee(employee);
        },
          (reason) => {});
    }
  
    deleteEmployee(employee: any) {
      this.httpProvider.deleteEmployeeById(employee.id).subscribe((data : any) => {
        if (data != null && data.body != null) {
          var resultData = data.body;
          if (resultData != null && resultData.isSuccess) {
            this.toastr.success(resultData.message);
            this.getAllEmployee();
          }
        }
      });
    } */
}
