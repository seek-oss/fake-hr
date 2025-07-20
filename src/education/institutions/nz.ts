import type { EducationInstitution } from '../../types.js';

/**
 * Non-exhaustive list of Institutes of Technology and Polytechnics in New
 * Zealand.
 *
 * In our model, they have no overseas campuses and provide programmes across
 * ISCED 2011 levels 2–5.
 *
 * {@link https://en.wikipedia.org/w/index.php?title=New_Zealand_Institute_of_Skills_%26_Technology&oldid=955460006}
 */
export const itps: EducationInstitution[] = [
  'Ara Institute of Canterbury',
  'Eastern Institute of Technology',
  'Manukau Institute of Technology',
  'Nelson Marlborough Institute of Technology',
  'NorthTec',
  'Otago Polytechnic',
  'Southern Institute of Technology',
  'Tai Poutini Polytechnic',
  'The Open Polytechnic of New Zealand',
  'Toi Ohomai Institute of Technology',
  'Unitec Institute of Technology',
  'Universal College of Learning',
  'Waikato Institute of Technology',
  'Wellington Institute of Technology',
  'Western Institute of Technology at Taranaki',
  'Whitireia New Zealand',
].map((name) => ({
  countries: ['nz'],
  name,
  levels: [2, 3, 4, 5],
}));

/**
 * Non-exhaustive list of universities in New Zealand.
 *
 * In our model, they have no overseas campuses and provide programmes across
 * ISCED 2011 levels 6–8.
 *
 * {@link https://en.wikipedia.org/w/index.php?title=List_of_universities_in_New_Zealand&oldid=951388797}
 */
export const universities: EducationInstitution[] = [
  'Auckland University of Technology',
  'Lincoln University',
  'Massey University',
  'University of Auckland',
  'University of Canterbury',
  'University of Otago',
  'University of Waikato',
  'Victoria University of Wellington',
].map((name) => ({
  countries: ['nz'],
  name,
  levels: [6, 7, 8],
}));
