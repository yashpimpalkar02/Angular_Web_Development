import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompFailureDirective } from './comp-failure.directive';
import { CompSuccessDirective } from './comp-success.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CompFailureDirective,CompSuccessDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mousecursur';
}
