import { Directive, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appSubs]',
  standalone: true,
})
export class SubsDirective implements OnDestroy {
  protected subs = new Subscription();

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
