import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentSvgModule } from '@playground/component-svg';
import { AppComponent } from './app.component';
import { HelloAppComponent } from './hello-app/hello-app.component';

@NgModule({
  declarations: [AppComponent, HelloAppComponent],
  imports: [BrowserModule, ComponentSvgModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
