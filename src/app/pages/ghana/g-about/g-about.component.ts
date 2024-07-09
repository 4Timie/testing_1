import { Component } from '@angular/core';
import { GFooterComponent } from '../shared/g-footer/g-footer.component';
import { GNavbarComponent } from '../shared/g-navbar/g-navbar.component';
import { ContactComponent } from '../../../components/general/aboutus/contact/contact.component';
import { ValueComponent } from '../../../components/general/aboutus/value/value.component';
import { ProductsComponent } from '../../../components/general/aboutus/products/products.component';
import { OurObjectivesComponent } from '../../../components/general/aboutus/our-objectives/our-objectives.component';
import { OverviewComponent } from '../../../components/general/aboutus/overview/overview.component';
import { GIndustryComponent } from '../../../components/ghana/aboutus/g-industry/g-industry.component';
import { GAboutTheTeamComponent } from '../../../components/ghana/aboutus/g-about-the-team/g-about-the-team.component';

@Component({
  selector: 'app-g-about',
  standalone: true,
  imports: [
    GNavbarComponent,
    GFooterComponent,
    ContactComponent,
    ValueComponent,
    ProductsComponent,
    OurObjectivesComponent,
    OverviewComponent,
    GIndustryComponent,
    GAboutTheTeamComponent
  ],
  templateUrl: './g-about.component.html',
  styleUrl: './g-about.component.css',
})
export class GAboutComponent {
  image = '../../../../assets/images/work-light.png';

  text =
    'eProcess Ghana has performed creditably and delivered technology services to the Group since 2016. eProcess Ghana seeks to expand its scope to provide financial technology services to Africa.';

    imageObjective='../../../../assets/images/objectives.png'
}
