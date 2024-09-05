import { Component } from '@angular/core';
import { environment } from "../../environments/enviornment"

@Component({
  selector: 'app-hello',
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
