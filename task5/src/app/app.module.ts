import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { InputNameComponent } from './input-name/input-name.component';
import { SkillComponent } from './skill/skill.component';
import { ButtonPlusComponent } from './button-plus/button-plus.component';
import { ButtonMinusComponent } from './button-minus/button-minus.component';
import { TotalSkillComponent } from './total-skill/total-skill.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    InputNameComponent,
    SkillComponent,
    ButtonPlusComponent,
    ButtonMinusComponent,
    TotalSkillComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
