import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResponsiveCheckComponent } from './responsive-check/responsive-check.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Todo';
}
