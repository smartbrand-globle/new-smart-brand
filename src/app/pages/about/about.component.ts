import { Component } from '@angular/core';
import { HeaderAboutComponent } from './components/header-about/header-about.component';
import { WhoAreAboutComponent } from './components/who-are-about/who-are-about.component';
import { WhatDoAboutComponent } from './components/what-do-about/what-do-about.component';
import { OurValuesAboutComponent } from './components/our-values-about/our-values-about.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    HeaderAboutComponent,
    WhoAreAboutComponent,
    WhatDoAboutComponent,
    OurValuesAboutComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
