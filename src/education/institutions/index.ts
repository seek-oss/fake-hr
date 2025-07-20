import { createSubsetMatcher } from '../../filter.js';
import type {
  CountryCode,
  EducationInstitution,
  EducationLevel,
} from '../../types.js';

import * as au from './au.js';
import * as nz from './nz.js';
import * as row from './row.js';

/**
 * A list of all education institutions in our limited data set.
 */
export const all: EducationInstitution[] = [
  au.tafes,
  au.universities,
  nz.itps,
  nz.universities,
  row.universities,
].flat();

interface FilterProps {
  /**
   * Limit institutions to those that operate in at least one of the specified
   * countries.
   *
   * Omit this filter to return institutions from all countries.
   */
  country?: CountryCode | CountryCode[] | readonly CountryCode[];

  /**
   * Limit institutions to those that offer an education programme that
   * corresponds to at least one of the specified ISCED 2011 levels.
   *
   * Omit this filter to return institutions regardless of education level.
   */
  level?: EducationLevel | EducationLevel[] | readonly EducationLevel[];
}

/**
 * Filter the list of education institutions in our limited data set.
 */
export const filter = ({
  country,
  level,
}: FilterProps = {}): EducationInstitution[] => {
  const matchesCountry = createSubsetMatcher(country);
  const matchesLevel = createSubsetMatcher(level);

  return all.filter(
    (institution) =>
      matchesCountry(institution.countries) && matchesLevel(institution.levels),
  );
};
