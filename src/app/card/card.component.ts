import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.css",
})
export class CardComponent {
  onDescriptionChange($event: Event) {
    throw new Error("Method not implemented.");
  }
  course: string = "Angular";

  cardData = {
    imageUrl: "https://via.placeholder.com/150",
    title: " Card Title",
    description: "Card Description",
  };

  onTitleChange(event: any): void {
    this.cardData.title = event.target.value;
  }

  changeTitle(): void {
    // metodo
    this.cardData.title = "Nuevo titulo";
  }

  onchangeDescription(event: any): void {
    this.cardData.description = event.target.value;
  }

  changeDescription(): void {
    this.cardData.description = "Nueva descripcion";
  }
}
