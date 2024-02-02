import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './components/button/btn.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [ButtonComponent],
})
export class SharedModule {}
