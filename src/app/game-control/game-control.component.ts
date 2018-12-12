import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  @Output() intervalStarted = new EventEmitter<number>();
  startNumber = 0

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.interval = setInterval(() => {
      this.intervalStarted.emit(this.startNumber + 1);
      this.startNumber++
    }, 1000)
  }

  stopGame() {
    clearInterval(this.interval)
  }
}
