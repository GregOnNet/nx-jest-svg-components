import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentSvgModule } from '@playground/component-svg';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ComponentSvgModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
