import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SideNavComponent } from '../components/side-nav/side-nav.component';
import { ContentComponent } from '../components/content/content.component';
import { CounterBtnComponent } from '../components/counter-btn/counter-btn.component';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from './layout.component';
import { CounterService } from '../service/counter.service';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    ContentComponent,
    CounterBtnComponent,
  ],
  providers: [CounterService],
  bootstrap: [LayoutComponent],
})
export class AppModule {}
