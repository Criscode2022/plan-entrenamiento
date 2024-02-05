import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'btnComponent',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
  standalone: true,
  imports: [MatButtonModule, CommonModule, ReactiveFormsModule],
})
export class ButtonComponent {
  @Input() buttonText: string = '';
  @Input() buttonColor: 'primary' | 'accent' | 'warn' = 'primary';
  @Input() disabled: boolean = false;
}
