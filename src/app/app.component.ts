import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from "./hello/hello.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppComponent, HelloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-environment-app';
}
