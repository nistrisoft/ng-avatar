import { NgModule } from '@angular/core';
import { NgAvatarComponent } from './ng-avatar.component';
import { NgAvatarGroupComponent } from './ng-avatar-group.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgAvatarComponent, NgAvatarGroupComponent],
  imports: [
    CommonModule
  ],
  exports: [NgAvatarComponent, NgAvatarGroupComponent]
})
export class NgAvatarModule { }
