import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  publications: Object[];
  constructor() {
    console.log('He inyectado el servicio en el componente en el que estás');
    this.publications = [
      { name: 'Pepe', publication: 'Esta es la publicación de Pepe' },
      { name: 'Maria', publication: 'Esta es la publicación de Maria' }];
  }

  getPublications(): Object[] {
    return this.publications;
  }
}
