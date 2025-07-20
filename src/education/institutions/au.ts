import type { EducationInstitution } from '../../types.js';

/**
 * Non-exhaustive list of TAFE institutes in Australia.
 *
 * In our model, they have no overseas campuses and provide programmes across
 * ISCED 2011 levels 2–5.
 *
 * {@link https://en.wikipedia.org/w/index.php?title=Technical_and_further_education&oldid=961379536}
 */
export const tafes: EducationInstitution[] = [
  // ACT
  'Canberra Institute of Technology',

  // NSW
  'Hunter Institute',
  'Illawarra Institute',
  'New England Institute',
  'North Coast Institute',
  'Northern Sydney Institute',
  'Riverina Institute',
  'South Western Sydney Institute',
  'Sydney Institute',
  'Western Institute',
  'Western Sydney Institute',

  // NT
  'Charles Darwin University',
  'Batchelor Institute of Indigenous Tertiary Education',

  // QLD
  'TAFE Queensland Grovely',
  'TAFE Queensland South Bank',
  'TAFE Queensland Acacia Ridge',
  'TAFE Queensland Bracken Ridge',
  'TAFE Queensland Aitkenvale',
  'TAFE Queensland Coolangatta',
  'TAFE Queensland Townsville',

  // SA
  'TAFE SA',

  // TAS
  'Institute of TAFE Tasmania',
  'Drysdale Institute',
  'Australian Maritime College TAFE',

  // VIC
  'Bendigo Regional Institute of TAFE',
  'Box Hill Institute of TAFE',
  'Chisholm Institute',
  'East Gippsland Institute of TAFE',
  'Central Gippsland Institute of TAFE',
  'Gordon Institute of TAFE',
  'Goulburn Ovens Institute of TAFE',
  'Holmesglen Institute of TAFE',
  'Kangan Institute',
  'Melbourne Polytechnic',
  'RMIT University',
  'South West Institute of TAFE',
  'Sunraysia Institute of TAFE',
  'Swinburne University of Technology',
  'University of Ballarat',
  'Victoria University',
  'William Angliss Institute of TAFE',
  'Wodonga Institute of TAFE',

  // WA
  'North Metropolitan TAFE',
  'South Metropolitan TAFE',
  'Central Regional TAFE',
  'South Regional TAFE',
  'North Regional TAFE',
].map((name) => ({
  countries: ['au'],
  name,
  levels: [2, 3, 4, 5],
}));

/**
 * Non-exhaustive list of universities in Australia.
 *
 * In our model, they have no overseas campuses and provide programmes across
 * ISCED 2011 levels 6–8.
 *
 * {@link https://en.wikipedia.org/w/index.php?title=List_of_universities_in_Australia&oldid=966773336}
 */
export const universities: EducationInstitution[] = [
  'Australian Catholic University',
  'Australian National University',
  'Bond University',
  'Carnegie Mellon University',
  'Central Queensland University',
  'Charles Darwin University',
  'Charles Sturt University',
  'Curtin University',
  'Deakin University',
  'Edith Cowan University',
  'Federation University Australia',
  'Flinders University',
  'Griffith University',
  'James Cook University',
  'La Trobe University',
  'Macquarie University',
  'Monash University',
  'Murdoch University',
  'Queensland University of Technology',
  'Royal Melbourne Institute of Technology',
  'Southern Cross University',
  'Swinburne University of Technology',
  'Torrens University Australia',
  'University of Adelaide',
  'The University of Canberra',
  'The University of Divinity',
  'University of Melbourne',
  'University of New England',
  'University of New South Wales',
  'The University of Newcastle',
  'The University of Notre Dame Australia',
  'University of Queensland',
  'University of South Australia',
  'University of Southern Queensland',
  'University of the Sunshine Coast',
  'University of Sydney',
  'University of Tasmania',
  'University of Technology Sydney',
  'The University of Western Australia',
  'University of Wollongong',
  'Victoria University',
  'Western Sydney University',
].map((name) => ({
  countries: ['au'],
  name,
  levels: [6, 7, 8],
}));
