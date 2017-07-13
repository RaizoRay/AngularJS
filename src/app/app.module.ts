import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { ApproutesModule } from './approutes.module';

import { HeroService } from './maincontent/hero.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './maincontent/sidebar/sidebar.component';
import { HeroesComponent } from './maincontent/heroes/heroes.component';
import { DirectiveComponent } from './directive/directive.component';
import { HighlightDirective } from './directive/highlight.directive';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MaincontentComponent,
    FooterComponent,
    SidebarComponent,
    HeroesComponent,
    DirectiveComponent,
    HighlightDirective,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ApproutesModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
