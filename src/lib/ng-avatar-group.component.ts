import { Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'ng-avatar-group',
  template: `
    <ng-content></ng-content>
    <ng-avatar *ngIf="plus > 0" [size]="plusSize" [text]="plus + '+'" [color]="color"><ng-avatar>
  `,
  styles : [
    `
    :host {
      display: flex;
      align-items: center;
    }

    :host ::ng-deep > * {
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
    }

    :host ::ng-deep > * + * {
      margin-left: -0.4em;
    }

    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgAvatarGroupComponent implements OnInit {

  @Input() plus = 0;
  @Input() plusSize = 32;
  @Input() color = '#607D8B';

  constructor() { }

  ngOnInit(): void {


  }

}
