import { Component } from '@angular/core';
import { FormCareersComponent } from "./form-careers/form-careers.component";

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [FormCareersComponent],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {

}
