import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { IndustryComponent } from '../../../components/international/aboutus/industry/industry.component';
import { OurObjectivesComponent } from '../../../components/general/aboutus/our-objectives/our-objectives.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ContactComponent } from '../../../components/general/aboutus/contact/contact.component';
import { TheTeamComponent } from '../../../components/international/home/the-team/the-team.component';
import { ValueComponent } from '../../../components/general/aboutus/value/value.component';
import { OverviewComponent } from '../../../components/general/aboutus/overview/overview.component';
import { ProductsComponent } from '../../../components/general/aboutus/products/products.component';
import { AboutTheTeamComponent } from '../../../components/international/aboutus/about-the-team/about-the-team.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NavbarComponent,
    IndustryComponent,
    OurObjectivesComponent,
    FooterComponent,
    ContactComponent,
    TheTeamComponent,
    ValueComponent,
    OverviewComponent,
    ProductsComponent,
    AboutTheTeamComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  image = '../../../../assets/images/overview-1.png';

  text = 
 'eProcess International S.A has performed creditably and delivered technology services to the Group since 2016. eProcess International seeks to expand its scope to provide financial technology services to Africa.';

 imageObjective='../../../../assets/images/objectives.png'

}
