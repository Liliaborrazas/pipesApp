import { Component } from '@angular/core';

@Component({
  selector: 'pages-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'lilia';
  public nameUpper: string = 'LILIA';
  public fullName: string = 'liLiA bOrRaZaS';

  public customDate: Date = new Date();
}
