import { Component } from '@angular/core';
import { CountUpModule } from 'ngx-countup';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about-home',
  standalone: true,
  imports: [CommonModule, CountUpModule],
  templateUrl: './about-home.component.html',
  styleUrl: './about-home.component.css',
})
export class AboutHomeComponent {
  employeeCount = 50; // العدد النهائي للموظفين
  clientsCount = 100; // العدد النهائي للعملاء
  countUpOptions = {
    enableScrollSpy: true,
    duration: 3,
  };
}
