import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() padding: 'none' | 'sm' | 'md' | 'lg' = 'md';
  @Input() shadow: 'none' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() hover = false;
  @Input() rounded: 'none' | 'sm' | 'md' | 'lg' | 'xl' = 'lg';

  get cardClasses(): string {
    const baseClasses =
      'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300';

    const paddingClasses = {
      none: '',
      sm: 'p-3',
      md: 'p-6',
      lg: 'p-8',
    };

    const shadowClasses = {
      none: '',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
    };

    const roundedClasses = {
      none: '',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
    };

    const hoverClass = this.hover
      ? 'hover:shadow-2xl hover:scale-[1.02] cursor-pointer'
      : '';

    return `${baseClasses} ${paddingClasses[this.padding]} ${shadowClasses[this.shadow]} ${roundedClasses[this.rounded]} ${hoverClass}`;
  }
}
