import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Booking } from './pages/booking/booking';
import { Contact } from './pages/contact/contact';

@Component({
  imports: [Home,Booking,Contact],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('class1');
}
