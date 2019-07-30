import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerControlComponent } from './timer-control/timer-control.component';
import { TimerDefaultComponent } from './timer-default/timer-default.component';
import { TimerOnPushComponent } from './timer-on-push/timer-on-push.component';
import { TimerDetectChangesComponent } from './timer-detect-changes/timer-detect-changes.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerControlComponent,
    TimerDefaultComponent,
    TimerOnPushComponent,
    TimerDetectChangesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
