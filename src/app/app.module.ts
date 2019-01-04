import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.app';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconRegistry} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import {RouterModule, Routes} from '@angular/router';
import {HiddenFilterPipe} from './pipes/hidden-filter.pipe';
import {ResumeComponent} from './resume/resume.component';

const appRoutes: Routes = [
  {path: 'resume', component: ResumeComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ResumeComponent,
    HiddenFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  icons = [
    'braces',
    'calendar',
    'devpost',
    'email',
    'fa-envelope-o',
    'fa-github',
    'fa-linkedin-square',
    'gear',
    'github',
    'link',
    'location',
    'phone',
    'video'
  ];

  constructor(private  matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.setupIcons();
  }

  setupIcons(): void {
    for (const icon of this.icons) {
      this.matIconRegistry.addSvgIcon(icon, this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/' + icon + '.svg'));
    }
  }
}
