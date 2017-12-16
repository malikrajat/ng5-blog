import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SamplePostComponent } from './sample-post/sample-post.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

// routing start 
const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'sample', component: SamplePostComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];
// routing ends 

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    SamplePostComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,    
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
