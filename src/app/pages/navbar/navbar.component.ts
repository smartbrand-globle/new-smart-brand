import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgClass, NgIf } from '@angular/common';
// import { MainService } from '../../shared/serives/main.service';
// import { SharedModule } from '../../shared/shared/shared.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgIf, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  showToggle: boolean = true;
  private _Renderer2 = inject(Renderer2);
  @ViewChild('btn') btn!: ElementRef;
  @ViewChild('btnSpan') btnSpan!: ElementRef;
  @ViewChild('list') list!: ElementRef;
  @ViewChild('navbar') navbar!: ElementRef;
  @ViewChild('logo') logo!: ElementRef;
  @ViewChild('header') header!: ElementRef;

  constructor() {}
  // @Input() bgColor = '';
  // ngOnInit(): void {}

  // toggleNavbarBg() {
  //   const header = document.querySelector('.header')! as HTMLElement;
  //   const dropdownMenu = document.querySelector(
  //     '.dropdown-menu'
  //   )! as HTMLElement;

  //   if (!this.showToggle) {
  //     header.style.background =
  //       'linear-gradient(to right, #5a136e, #a90b84, #ff009c)';
  //     dropdownMenu.style.background = 'transparent';
  //   } else {
  //     header.style.background = this.bgColor;
  //     dropdownMenu.style.background =
  //       'linear-gradient(to right, #5a136e, #a90b84, #ff009c)';
  //   }
  // }

  // ngAfterViewInit(): void {
  //   // this.header.nativeElement.style.background = this.bgColor;

  //   // ***************************
  //   const hiddenList = document.querySelector('#navbarNav');

  //   this._Renderer2.listen(this.navbar.nativeElement, 'click', () => {});

  //   // ***************************

  //   this.navbar.nativeElement.addEventListener('click', (e: any) => {
  //     if (
  //       e.target != this.btn.nativeElement &&
  //       e.target != this.btnSpan.nativeElement &&
  //       !e.target == e.target.classList.contains('results')
  //     ) {
  //       this.showToggle = true;
  //     }

  //     if (!e.target == e.target.classList.contains('results')) {
  //       this._Renderer2.addClass(this.btn.nativeElement, 'collapsed');
  //       this._Renderer2.setAttribute(
  //         this.btn.nativeElement,
  //         'aria-expanded',
  //         'false'
  //       );
  //       this._Renderer2.removeClass(this.list.nativeElement, 'show');
  //     }

  //     //

  //     this.toggleNavbarBg();
  //   });
  // }
  //

  // selectLang(event: Event) {
  //   const selectElement = event.target as HTMLSelectElement;
  //   const selectedLang = selectElement.value;

  //   this.mainServise.selectLang(selectedLang);
  // }

  showLogo() {
    // this.showToggle = !this.showToggle;
  }
}
