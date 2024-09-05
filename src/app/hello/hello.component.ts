import { Component } from '@angular/core';
import { environment } from "../../environments/environment"
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello',
  standalone:true,
  imports: [CommonModule], // <-- Import modules if needed
  template: `
    <div>
      <h1>Welcome to {{ environmentName }} Environment</h1>
      <p>API URL: {{ apiUrl }}</p>
    </div>
  `
})
export class HelloComponent {
  environmentName = environment.environmentName;
  apiUrl = environment.apiUrl;
}
