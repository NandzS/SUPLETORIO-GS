import { Component } from '@angular/core';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrl: './cartas.component.css'
})
export class CartasComponent {
  images: Image[] = [
    { url: '../../../assets/IMG/imagen1.jpg' },
    { url: '../../../assets/IMG/imagen2.jpg' },
    { url: '../../../assets/IMG/imagen3.jpg' },
    { url: '../../../assets/IMG/imagen4.jpg' }
  ];

  zoomIn(event: MouseEvent) {
    const element = event.target as HTMLElement;
    element.classList.add('zoomed');
  }

  zoomOut(event: MouseEvent) {
    const element = event.target as HTMLElement;
    element.classList.remove('zoomed');
  }
}

interface Image {
  url: string;
}
