import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homework1Component } from './components/homework1/homework1.component';
import { Homework2Component } from './components/homework2/homework2.component';
import { Parent1Component } from './components/parent1/parent1.component';
import { Child1Component } from './components/child1/child1.component';
import { Parent2Component } from './components/parent2/parent2.component';
import { Child2Component } from './components/child2/child2.component';
import { Homework3Component } from './homework3/homework3.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
// import { HighlightDirectiveComponent } from './highlight-directive/highlight-directive.component';
import { UnlessAnimComponent } from './unless-anim/unless-anim.component';
import { FormsModule } from '@angular/forms';
// import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    Homework1Component,
    Homework2Component,
    Parent1Component,
    Child1Component,
    Parent2Component,
    Child2Component,
    Homework3Component,
    NgswitchComponent,
    // HighlightDirectiveComponent,
    UnlessAnimComponent,
    // HighlightDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
