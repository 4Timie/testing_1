import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { LogosComponent } from '../../../components/general/home/logos/logos.component';
import { DataComponent } from '../../../components/general/home/data/data.component';
import { NewslettersComponent } from '../../../components/general/home/newsletters/newsletters.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { PhilosophyComponent } from '../../../components/general/home/philosophy/philosophy.component';
import { GainComponent } from '../../../components/general/home/gain/gain.component';
import { OurServicesComponent } from '../../../components/international/home/our-services/our-services.component';
import { OurBlogComponent } from '../../../components/international/home/our-blog/our-blog.component';
import { TheTeamComponent } from '../../../components/international/home/the-team/the-team.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    LogosComponent,
    DataComponent,
    NewslettersComponent,
    FooterComponent,
    PhilosophyComponent,
    GainComponent,
    OurServicesComponent,
    OurBlogComponent,
    TheTeamComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  imageService = '../../../../assets/images/smile.png';
  textService =
    'At eProcess International S.A, we pioneer financial technology services that transcend boundaries. From seamless transactions to robust security, experience innovation that redefines your financial landscape. Explore our transformative solutions today.';

  newsText='Stay ahead in fintech: Subscribe for exclusive updates on eProcess Internationals groundbreaking articles and insights.'  
  
}
