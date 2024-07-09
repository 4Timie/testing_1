import { Component } from '@angular/core';
import { GNavbarComponent } from '../shared/g-navbar/g-navbar.component';
import { GFooterComponent } from '../shared/g-footer/g-footer.component';
import { LogosComponent } from '../../../components/general/home/logos/logos.component';
import { DataComponent } from '../../../components/general/home/data/data.component';
import { NewslettersComponent } from '../../../components/general/home/newsletters/newsletters.component';
import { PhilosophyComponent } from '../../../components/general/home/philosophy/philosophy.component';
import { GainComponent } from '../../../components/general/home/gain/gain.component';
import { GOurBlogComponent } from '../../../components/ghana/home/g-our-blog/g-our-blog.component';
import { GTheTeamComponent } from '../../../components/ghana/home/g-the-team/g-the-team.component';
import { GOurServicesComponent } from '../../../components/ghana/home/g-our-services/g-our-services.component';

@Component({
  selector: 'app-g-home',
  standalone: true,
  imports: [
    GNavbarComponent,
    GFooterComponent,
    LogosComponent,
    DataComponent,
    NewslettersComponent,
    PhilosophyComponent,
    GainComponent,
    GOurBlogComponent,
    GTheTeamComponent,
    GOurServicesComponent
  ],
  templateUrl: './g-home.component.html',
  styleUrl: './g-home.component.css',
})
export class GHomeComponent {
  newsText='Empower your financial journey! Subscribe for exclusive updates on eProcess Ghanas transformative articles and insights.'  
}


