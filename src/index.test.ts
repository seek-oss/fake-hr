import { fakeHr } from '.';

describe('app', () => {
  it('defines education exports', () => {
    expect(fakeHr.education.institutions).toBeDefined();
  });
});
