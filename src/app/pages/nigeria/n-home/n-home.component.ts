import { Component } from '@angular/core';
import { NNavbarComponent } from '../shared/n-navbar/n-navbar.component';
import { NFooterComponent } from '../shared/n-footer/n-footer.component';
import { LogosComponent } from '../../../components/general/home/logos/logos.component';
import { DataComponent } from '../../../components/general/home/data/data.component';
import { OurServicesComponent } from '../../../components/international/home/our-services/our-services.component';
import { GainComponent } from '../../../components/general/home/gain/gain.component';
import { PhilosophyComponent } from '../../../components/general/home/philosophy/philosophy.component';
import { NewslettersComponent } from '../../../components/general/home/newsletters/newsletters.component';
import { NTheTeamComponent } from '../../../components/nigeria/home/n-the-team/n-the-team.component';
import { NOurBlogComponent } from '../../../components/nigeria/home/n-our-blog/n-our-blog.component';
import { NOurServicesComponent } from '../../../components/nigeria/home/n-our-services/n-our-services.component';

@Component({
  selector: 'app-n-home',
  standalone: true,
  imports: [
    NNavbarComponent,
    NFooterComponent,
    LogosComponent,
    DataComponent,
    OurServicesComponent,
    GainComponent,
    PhilosophyComponent,
    NewslettersComponent,
    NTheTeamComponent,
    NOurBlogComponent,
    NOurServicesComponent
  ],
  templateUrl: './n-home.component.html',
  styleUrl: './n-home.component.css',
})
export class NHomeComponent {
  newsText ='Stay informed, stay empowered! Subscribe for exclusive updates on eProcess Nigerias transformative articles and financial insights.'
}
