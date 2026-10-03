import { Component, signal } from '@angular/core';

import { Footer } from './footer/footer';
import { Header } from './header/header';
import { Hero } from './hero/hero';

@Component({
  imports: [Header,Footer,Hero],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('class1');
}
