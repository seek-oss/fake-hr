import { createSubsetMatcher } from '../../filter';
import type {
  CountryCode,
  EducationInstitution,
  EducationLevel,
} from '../../types';

import * as au from './au';
import * as nz from './nz';
import * as row from './row';

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
  country?: CountryCode | CountryCode[];
  level?: EducationLevel | EducationLevel[];
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
