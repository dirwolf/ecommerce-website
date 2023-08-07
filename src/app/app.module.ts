import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { CarouselComponent } from './carousel/carousel.component';
import { NgbdCarouselBasic } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    // FooterComponent,
    HeaderComponent,
    SideNavComponent,
    NgbdCarouselBasic,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    // Other modules
  ],
  
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
