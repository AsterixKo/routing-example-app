import { Component, OnInit } from '@angular/core';
import { PublicationsService } from 'src/app/shared/services/publications.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  publications: Object[];
  constructor(private publicationService: PublicationsService) {
  }

  ngOnInit(): void {//se inicializa justo despues del constructor
    console.log(this.publicationService.getPublications());
    this.publications = this.publicationService.getPublications();
  }

}
