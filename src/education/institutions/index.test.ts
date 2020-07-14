import * as institutions from '.';

describe('filter', () => {
  it('passes through all by default', () =>
    expect(institutions.filter()).toHaveLength(institutions.all.length));

  it('filters by one country', () =>
    institutions
      .filter({ country: 'au' })
      .forEach(({ countries }) => expect(countries).toContain('au')));

  it('filters by two levels', () =>
    institutions
      .filter({ level: [1, 2] })
      .forEach(({ levels }) =>
        expect(levels.some((level) => level === 1 || level === 2)).toBe(true),
      ));
});
