import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { CommunityComponent } from './community/community.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { SkillsComponent } from './skills/skills.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfileComponent,
    CommunityComponent,
    PersonalinfoComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule
  ]
})
export class ProfileModule { }
