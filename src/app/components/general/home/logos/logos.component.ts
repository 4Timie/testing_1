import { Component } from '@angular/core';
import { trigger, transition, animate, style, keyframes } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-logos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logos.component.html',
  styleUrl: './logos.component.css',
  // animations: [
  //   trigger('scrollAnimation', [
  //     transition('* => *', [
  //       style({ transform: 'translateX(100%)' }),
  //       animate('15s linear', style({ transform: 'translateX(-100%)' })),
  //     ]),
  //   ]),
  // ],

  // animations: [
  //   trigger('scrollAnimation', [
  //     transition('* => *', [
  //       animate(
  //         '15s linear',
  //         keyframes([
  //           style({ transform: 'translateX(100%)', offset: 0 }),
  //           style({ transform: 'translateX(-100%)', offset: 1 }),
  //         ])
  //       ),
  //     ]),
  //   ]),
  // ],
})
export class LogosComponent {
  // scrollState: boolean = true; // Toggle to trigger animation restart

}
