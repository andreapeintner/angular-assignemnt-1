import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  oddNr: number[] = []
  evenNr: number[] = []

  onIntervalStarted(startNumber: number) {
    if (startNumber % 2 === 0) {
      this.evenNr.push(startNumber)
    } else {
      this.oddNr.push(startNumber)
    }
  }
}
