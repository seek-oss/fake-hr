import { fakeHr } from '.';

describe('app', () => {
  it('defines exports', () => {
    expect(fakeHr.competencies.all).toBeDefined();
    expect(fakeHr.education.institutions.all).toBeDefined();
    expect(fakeHr.education.institutions.filter).toBeDefined();
    expect(fakeHr.education.qualifications.all).toBeDefined();
    expect(fakeHr.education.qualifications.filter).toBeDefined();
  });
});
