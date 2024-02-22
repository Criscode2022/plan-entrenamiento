import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
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
  @Input() color: string = 'gray'; // Default color
  buttonClass: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called', changes);
    if (changes['color']) {
      this.updateButtonClass();
    }
  }

  private updateButtonClass(): void {
    // Tailwind class as a fallback
    const baseClass = 'btn btn-block border-none';
    // Update buttonClass with the new class string
    this.buttonClass = `${baseClass} bg-${this.color}`;
    console.log(`Button class updated: ${this.buttonClass}`);
  }
}
