import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, InjectFlags } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { Router } from '@angular/router';
import { TestComponent } from './test.component';


@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [TestComponent]
})
export class TestModule {
  constructor(injector: Injector) {
    try {
      console.log('Trying to load Router in `test.module.ts`...');
      console.log(injector.get(Router, 'success' as unknown as Router, InjectFlags.Optional));
    } catch (e) {
      console.log('fail', e);
    }

    const headerCE = createCustomElement(TestComponent, {injector});
    customElements.define('test-ce', headerCE);
  }
}
