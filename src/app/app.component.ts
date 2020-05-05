import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mailbox';

  value: string;
  isError = false;

  onError(error) {
    console.error(error);
    this.isError = true;
  }
}
