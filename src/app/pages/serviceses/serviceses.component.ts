import { Component } from '@angular/core';
import { HeaderServicesComponent } from './components/header-services/header-services.component';
import { MainServicesComponent } from './components/main-services/main-services.component';

@Component({
  selector: 'app-serviceses',
  standalone: true,
  imports: [HeaderServicesComponent, MainServicesComponent],
  templateUrl: './serviceses.component.html',
  styleUrl: './serviceses.component.css',
})
export class ServicesesComponent {}
