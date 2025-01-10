import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarvellousComponent } from './marvellous/marvellous.component';
import { AppServerModule } from './app.module.server';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MarvellousComponent,AppServerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'boot';
}
