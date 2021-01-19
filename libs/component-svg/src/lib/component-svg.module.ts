import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HelloComponent],
  exports: [HelloComponent],
})
export class ComponentSvgModule {}
