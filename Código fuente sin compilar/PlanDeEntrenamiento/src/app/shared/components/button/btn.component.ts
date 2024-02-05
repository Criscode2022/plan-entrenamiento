import { Component, Input } from '@angular/core';

@Component({
  selector: 'btnComponent',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
})
export class ButtonComponent {
  @Input() buttonText: string = '';
  @Input() buttonColor: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;
}
