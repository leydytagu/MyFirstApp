import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CalculatorModule } from './calculator/calculator.module';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransferAccountComponent } from './transfer-account/transfer-account.component';
import { CardComponent } from './card/card.component';
import { TaskListComponent } from './task-list/task-list.component'; // Corrección en la ruta de TaskListComponent

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TransferAccountComponent,
    CardComponent,
    TaskListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculatorModule,
    MaterialComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
