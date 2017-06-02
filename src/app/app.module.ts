import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { environment } from '../environments/environment';

import { Chart } from 'chart.js';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { ExpComponent } from './exp/exp.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ChartComponent } from './chart/chart.component';
import { ChartTwoComponent } from './chart-two/chart-two.component';
import { ValidateService } from './services/validate.service';
import { MailerService } from './services/mailer.service';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes = [
  { path: '', redirectTo : 'profile', pathMatch: 'full'},
  { path: 'profile', component: ProfileComponent, children: [
    { path: '', redirectTo: 'exp', pathMatch: 'full'},
    { path: 'exp', component: ExpComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'skills', component: SkillsComponent},
    { path: 'contact', component: ContactComponent }
  ] }
];

@NgModule({
  declarations: [
    AppComponent,
    ExpComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
    ChartComponent,
    ChartTwoComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule,
    FlashMessagesModule
  ],
  providers: [ValidateService, MailerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
