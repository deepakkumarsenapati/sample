import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature1RoutingModule } from './feature1-routing.module';
import { Feature1Component } from './feature1.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';

@NgModule({
  declarations: [Feature1Component, TestComponent, Test2Component],
  imports: [CommonModule, Feature1RoutingModule],
})
export class Feature1Module {}
