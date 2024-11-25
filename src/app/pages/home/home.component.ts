import { Component } from '@angular/core';
import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { AboutHomeComponent } from "./components/about-home/about-home.component";
import { OurServiseHomeComponent } from "./components/our-servise-home/our-servise-home.component";
import { WhyChosesUsComponent } from "./components/why-choses-us/why-choses-us.component";
import { OurProcessHomeComponent } from "./components/our-process-home/our-process-home.component";
import { GetInTouchComponent } from "./components/get-in-touch/get-in-touch.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderHomeComponent, AboutHomeComponent, OurServiseHomeComponent, WhyChosesUsComponent, OurProcessHomeComponent, GetInTouchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
