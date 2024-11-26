import { Component } from '@angular/core';
import { HeaderAboutComponent } from './components/header-about/header-about.component';
import { WhoAreAboutComponent } from './components/who-are-about/who-are-about.component';
import { WhatDoAboutComponent } from './components/what-do-about/what-do-about.component';
import { OurValuesAboutComponent } from './components/our-values-about/our-values-about.component';
import { GetInTouchComponent } from '../home/components/get-in-touch/get-in-touch.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    HeaderAboutComponent,
    WhoAreAboutComponent,
    WhatDoAboutComponent,
    OurValuesAboutComponent,
    GetInTouchComponent,
    StatisticsComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
