import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() fullWidth = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() loading = false;
  @Output() clicked = new EventEmitter<void>();

  get buttonClasses(): string {
    const baseClasses =
      'font-medium rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';

    const variantClasses = {
      primary:
        'bg-gradient-to-r from-primary-light to-orange-500 dark:from-primary-dark dark:to-purple-700 text-white shadow-lg hover:shadow-xl focus:ring-primary-light dark:focus:ring-primary-dark',
      secondary:
        'bg-gradient-to-r from-secondary-light to-blue-600 dark:from-secondary-dark dark:to-blue-800 text-white shadow-lg hover:shadow-xl focus:ring-secondary-light dark:focus:ring-secondary-dark',
      outline:
        'border-2 border-primary-light dark:border-primary-dark text-primary-light dark:text-primary-dark hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark dark:hover:text-white focus:ring-primary-light dark:focus:ring-primary-dark',
      ghost:
        'text-primary-light dark:text-primary-dark hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-300 dark:focus:ring-gray-700',
      danger:
        'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg hover:shadow-xl focus:ring-red-500',
    };

    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    const widthClass = this.fullWidth ? 'w-full' : '';

    return `${baseClasses} ${variantClasses[this.variant]} ${sizeClasses[this.size]} ${widthClass}`;
  }

  onClick(): void {
    if (!this.disabled && !this.loading) {
      this.clicked.emit();
    }
  }
}
