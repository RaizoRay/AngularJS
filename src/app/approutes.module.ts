import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './maincontent/sidebar/sidebar.component';
import { HeroesComponent } from './maincontent/heroes/heroes.component';
import { DirectiveComponent } from './directive/directive.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const APP_ROUTES = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },    
    { path: 'App', component: AppComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'maincontent', component: MaincontentComponent },
    { path: 'sidebar', component: SidebarComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'directive', component: DirectiveComponent },
    { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class ApproutesModule { }
