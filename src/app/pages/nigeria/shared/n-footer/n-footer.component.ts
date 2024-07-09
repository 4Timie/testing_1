import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-n-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,MatIconModule],
  templateUrl: './n-footer.component.html',
  styleUrl: './n-footer.component.css'
})
export class NFooterComponent {

}
