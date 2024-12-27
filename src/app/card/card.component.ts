import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  course: string = 'Angular desde Cero';

  cardData = {
    imageUrl: 'https://via.placehold.com/150',
    title: ' Card Title',
    description: 'Card Description',
  };

  onTitleChange(event: any): void {
    this.cardData.title = event.target.value;
  }

  changeTitle(): void {
    this.cardData.title = 'Nuevo titulo';
  }
}
