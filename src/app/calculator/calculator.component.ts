import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"],
})
export class CalculatorComponent {
  number1: number = 0;
  number2: number = 0;
  result: number = 0;

  @Input() //decorador
  title: string = "Calculadora"; //propiedad: title

  @Output()
  emitter: EventEmitter<number> = new EventEmitter(); // evento emitter

  calculateSum() {
    //función que se ejecuta con el evento
    this.result = this.number1 + this.number2;
    this.emitter.emit(this.result);
  }

  newOperation() {
    // Restablecer los valores de los números y el resultado
    this.number1 = 0;
    this.number2 = 0;
    this.result = 0;
  }
}
