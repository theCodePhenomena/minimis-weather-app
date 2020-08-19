import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home/home.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { AddCardComponent } from './components/add-card/add-card.component';
import { DetailsComponent } from './pages/details/details.component';
import { WeatherService } from './services/weather.service';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    WeatherCardComponent,
    AddCardComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NguiAutoCompleteModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
