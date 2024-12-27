import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CalculatorComponent], //componentes dentro del modulo
  imports: [CommonModule, FormsModule], //import el formulario para calculadora
})
export class CalculatorModule {}
