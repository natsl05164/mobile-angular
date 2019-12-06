import { SafePipe } from './safe.pipe';
import { DomSanitizer  } from '@angular/platform-browser';

describe('SafePipe', () => {
  let domSanitizer: DomSanitizer;
  it('create an instance', () => {
    const pipe = new SafePipe(domSanitizer);
    expect(pipe).toBeTruthy();
  });
});
