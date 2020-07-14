import { fakeHr } from '.';

describe('app', () => {
  it('defines exports', () => {
    expect(fakeHr.competencies.all).toBeDefined();
    expect(fakeHr.education.institutions.all).toBeDefined();
    expect(fakeHr.education.institutions.filter).toBeDefined();
  });
});
