import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transfer-account',
  templateUrl: './transfer-account.component.html',
  styleUrl: './transfer-account.component.css',
})
export class TransferAccountComponent {
  selectedLink: string | null = null;
  formGroup: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {}

  setSelectedLink(link: string): void {
    this.selectedLink = link;
  }

  submitTransfer() {
    console.log(this.formGroup.value);
  }
}
