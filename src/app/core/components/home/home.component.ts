import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  publications: Object[];
  constructor() {
    this.publications = [
      { name: 'Pepe', publication: 'Esta es la publicación de Pepe' },
      { name: 'Maria', publication: 'Esta es la publicación de Maria' }];
  }

  ngOnInit(): void {
  }

}
