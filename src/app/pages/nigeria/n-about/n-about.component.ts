import { Component } from '@angular/core';
import { NNavbarComponent } from '../shared/n-navbar/n-navbar.component';
import { NFooterComponent } from '../shared/n-footer/n-footer.component';
import { ContactComponent } from '../../../components/general/aboutus/contact/contact.component';
import { ValueComponent } from '../../../components/general/aboutus/value/value.component';
import { ProductsComponent } from '../../../components/general/aboutus/products/products.component';
import { OverviewComponent } from '../../../components/general/aboutus/overview/overview.component';
import { NIndustryComponent } from '../../../components/nigeria/aboutus/n-industry/n-industry.component';
import { OurObjectivesComponent } from '../../../components/general/aboutus/our-objectives/our-objectives.component';
import { NAboutTheTeamComponent } from '../../../components/nigeria/aboutus/n-about-the-team/n-about-the-team.component';

@Component({
  selector: 'app-n-about',
  standalone: true,
  imports: [
    NNavbarComponent,
    NFooterComponent,
    ContactComponent,
    ValueComponent,
    ProductsComponent,
    OverviewComponent,
    NIndustryComponent,
    OurObjectivesComponent,
    NAboutTheTeamComponent
  ],
  templateUrl: './n-about.component.html',
  styleUrl: './n-about.component.css',
})
export class NAboutComponent {
  image = '../../../../assets/images/work-green.png';

  text =
    'eProcess Nigeria has performed creditably and delivered technology services to the Group since 2016. eProcess Nigeria seeks to expand its scope to provide financial technology services to Africa.';

  logostate = true;

  imageObjective='../../../../assets/images/overview-1-small.png'

}
