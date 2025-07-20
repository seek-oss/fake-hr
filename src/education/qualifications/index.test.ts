import * as qualifications from './index.js';

describe('filter', () => {
  it('passes through all by default', () =>
    expect(qualifications.filter()).toHaveLength(qualifications.all.length));

  it('filters by one country', () =>
    qualifications
      .filter({ country: 'au' })
      .forEach(({ countries }) =>
        expect(
          typeof countries === 'undefined' ||
            countries.some((country) => country === 'au'),
        ).toBe(true),
      ));

  it('filters by two levels', () =>
    qualifications
      .filter({ level: [1, 2] })
      .forEach(({ level }) => expect(level === 1 || level === 2).toBe(true)));
});
