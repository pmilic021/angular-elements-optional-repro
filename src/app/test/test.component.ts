import { Component, Injector, InjectFlags } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  template: 'test component works'
})
export class TestComponent {
  constructor(injector: Injector) {
    try {
      console.log('Trying to load Router in `test.component.ts`...');
      console.log(injector.get(Router, 'success' as unknown as Router, InjectFlags.Optional));
    } catch (e) {
      console.log('fail', e);
    }
  }
}
