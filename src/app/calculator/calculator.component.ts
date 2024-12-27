import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  number1: number = 0;
  number2: number = 0;
  result: number = 0;

  @Input() //decorador
  title: string = ''; //propiedad: title

  @Output()
  emitter: EventEmitter<number> = new EventEmitter(); // evento emitter

  calculateSum() {
    //funcion que se ejecuta con el evento
    this.result = this.number1 + this.number2;
    this.emitter.emit(this.result);
  }
}
