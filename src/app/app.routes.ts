import { Routes } from '@angular/router';
import { HomeComponent } from './pages/international/home/home.component';
import { AboutComponent } from './pages/international/about/about.component';
import { GalleryComponent } from './pages/international/gallery/gallery.component';
import { BlogComponent } from './pages/international/blog/blog.component';
import { BlogcontentComponent } from './pages/international/blogcontent/blogcontent.component';
import { GHomeComponent } from './pages/ghana/g-home/g-home.component';
import { GAboutComponent } from './pages/ghana/g-about/g-about.component';
import { GGalleryComponent } from './pages/ghana/g-gallery/g-gallery.component';
import { GBlogComponent } from './pages/ghana/g-blog/g-blog.component';
import { NHomeComponent } from './pages/nigeria/n-home/n-home.component';
import { NAboutComponent } from './pages/nigeria/n-about/n-about.component';
import { NGalleryComponent } from './pages/nigeria/n-gallery/n-gallery.component';
import { NBlogComponent } from './pages/nigeria/n-blog/n-blog.component';

export const routes: Routes = [
    {path:'', redirectTo:'eProcess-International-S.A', pathMatch:'full'},

    {path:'eProcess-International-S.A', component:HomeComponent},
    {path:'eProcess-International-S.A/about-us', component:AboutComponent},
    {path:'eProcess-International-S.A/gallery', component:GalleryComponent},
    {path:'eProcess-International-S.A/blog', component:BlogComponent},
    {path:'eProcess-International-S.A/blog/:id', component:BlogcontentComponent},

    {path:'eProcess-ghana', component:GHomeComponent},
    {path:'eProcess-ghana/about-us', component:GAboutComponent},
    {path:'eProcess-ghana/gallery', component:GGalleryComponent},
    {path:'eProcess-ghana/blog', component:GBlogComponent},

    {path:'eProcess-nigeria', component:NHomeComponent},
    {path:'eProcess-nigeria/about-us', component:NAboutComponent},
    {path:'eProcess-nigeria/gallery', component:NGalleryComponent},
    {path:'eProcess-nigeria/blog', component:NBlogComponent},


];
