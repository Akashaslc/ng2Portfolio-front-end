import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
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

const appRoutes: Routes = [
  {path: '', redirectTo : '/exp', pathMatch: 'full'},
  {path: 'exp', component: ExpComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'skills', component: SkillsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ExpComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
