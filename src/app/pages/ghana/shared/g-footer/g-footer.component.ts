import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-g-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,MatIconModule],
  templateUrl: './g-footer.component.html',
  styleUrl: './g-footer.component.css'
})
export class GFooterComponent {

}
