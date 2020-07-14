import type { EducationInstitution } from '../../types';

/**
 * Subset of the 2021 edition of the QS World University Rankings.
 *
 * `au` and `nz` entries are removed to avoid duplication.
 *
 * In our model, they have no overseas campuses and provide programmes across
 * ISCED 2011 levels 6–8.
 *
 * {@link https://www.topuniversities.com/university-rankings/world-university-rankings/2021}
 */
export const universities: EducationInstitution[] = ([
  {
    name: 'Massachusetts Institute of Technology',
    countries: ['us'],
  },
  {
    name: 'Stanford University',
    countries: ['us'],
  },
  {
    name: 'Harvard University',
    countries: ['us'],
  },
  {
    name: 'California Institute of Technology',
    countries: ['us'],
  },
  {
    name: 'University of Oxford',
    countries: ['gb'],
  },
  {
    name: 'ETH Zurich',
    countries: ['ch'],
  },
  {
    name: 'University of Cambridge',
    countries: ['gb'],
  },
  {
    name: 'Imperial College London',
    countries: ['gb'],
  },
  {
    name: 'University of Chicago',
    countries: ['us'],
  },
  {
    name: 'UCL',
    countries: ['gb'],
  },
  {
    name: 'National University of Singapore',
    countries: ['sg'],
  },
  {
    name: 'Princeton University',
    countries: ['us'],
  },
  {
    name: 'Nanyang Technological University, Singapore',
    countries: ['sg'],
  },
  {
    name: 'Ecole Polytechnique Fédérale de Lausanne',
    countries: ['ch'],
  },
  {
    name: 'Tsinghua University',
    countries: ['cn'],
  },
  {
    name: 'University of Pennsylvania',
    countries: ['us'],
  },
  {
    name: 'Yale University',
    countries: ['us'],
  },
  {
    name: 'Cornell University',
    countries: ['us'],
  },
  {
    name: 'Columbia University',
    countries: ['us'],
  },
  {
    name: 'University of Edinburgh',
    countries: ['gb'],
  },
  {
    name: 'University of Michigan-Ann Arbor',
    countries: ['us'],
  },
  {
    name: 'University of Hong Kong',
    countries: ['hk'],
  },
  {
    name: 'Peking University',
    countries: ['cn'],
  },
  {
    name: 'University of Tokyo',
    countries: ['jp'],
  },
  {
    name: 'Johns Hopkins University',
    countries: ['us'],
  },
  {
    name: 'University of Toronto',
    countries: ['ca'],
  },
  {
    name: 'Hong Kong University of Science and Technology',
    countries: ['hk'],
  },
  {
    name: 'University of Manchester',
    countries: ['gb'],
  },
  {
    name: 'Northwestern University',
    countries: ['us'],
  },
  {
    name: 'University of California, Berkeley',
    countries: ['us'],
  },
  {
    name: "King's College London",
    countries: ['gb'],
  },
  {
    name: 'McGill University',
    countries: ['ca'],
  },
  {
    name: 'Fudan University',
    countries: ['cn'],
  },
  {
    name: 'New York University (NYU)',
    countries: ['us'],
  },
  {
    name: 'University of California, Los Angeles',
    countries: ['us'],
  },
  {
    name: 'Seoul National University',
    countries: ['kr'],
  },
  {
    name: 'Kyoto University',
    countries: ['jp'],
  },
  {
    name: 'KAIST - Korea Advanced Institute of Science & Technology',
    countries: ['kr'],
  },
  {
    name: 'Duke University',
    countries: ['us'],
  },
  {
    name: 'Chinese University of Hong Kong (CUHK)',
    countries: ['hk'],
  },
  {
    name: 'University of British Columbia',
    countries: ['ca'],
  },
  {
    name: 'Shanghai Jiao Tong University',
    countries: ['cn'],
  },
  {
    name: 'City University of Hong Kong',
    countries: ['hk'],
  },
  {
    name: 'London School of Economics and Political Science (LSE)',
    countries: ['gb'],
  },
  {
    name: 'Technical University of Munich',
    countries: ['de'],
  },
  {
    name: 'Carnegie Mellon University',
    countries: ['us'],
  },
  {
    name: 'Universite PSL',
    countries: ['fr'],
  },
  {
    name: 'Zhejiang University',
    countries: ['cn'],
  },
  {
    name: 'University of California, San Diego',
    countries: ['us'],
  },
  {
    name: 'Tokyo Institute of Technology',
    countries: ['jp'],
  },
  {
    name: 'Delft University of Technology',
    countries: ['nl'],
  },
  {
    name: 'University of Bristol',
    countries: ['gb'],
  },
  {
    name: 'Universiti Malaya',
    countries: ['my'],
  },
  {
    name: 'Brown University',
    countries: ['us'],
  },
  {
    name: 'University of Amsterdam',
    countries: ['nl'],
  },
  {
    name: 'University of Warwick',
    countries: ['gb'],
  },
  {
    name: 'Ludwig-Maximilians-Universität München',
    countries: ['de'],
  },
  {
    name: 'Ruprecht-Karls-Universitat Heidelberg',
    countries: ['de'],
  },
  {
    name: 'University of Wisconsin-Madison',
    countries: ['us'],
  },
  {
    name: 'National Taiwan University',
    countries: ['tw'],
  },
  {
    name: 'Universidad de Buenos Aires',
    countries: ['ar'],
  },
  {
    name: 'Ecole Polytechnique',
    countries: ['fr'],
  },
  {
    name: 'Korea University',
    countries: ['kr'],
  },
  {
    name: 'University of Zurich',
    countries: ['ch'],
  },
  {
    name: 'University of Texas at Austin',
    countries: ['us'],
  },
  {
    name: 'Osaka University',
    countries: ['jp'],
  },
  {
    name: 'University of Washington',
    countries: ['us'],
  },
  {
    name: 'Lomonosov Moscow State University',
    countries: ['ru'],
  },
  {
    name: 'Hong Kong Polytechnic University',
    countries: ['hk'],
  },
  {
    name: 'University of Copenhagen',
    countries: ['dk'],
  },
  {
    name: 'Pohang University of Science and Technology',
    countries: ['kr'],
  },
  {
    name: 'University of Glasgow',
    countries: ['gb'],
  },
  {
    name: 'Tohoku University',
    countries: ['jp'],
  },
  {
    name: 'Georgia Institute of Technology',
    countries: ['us'],
  },
  {
    name: 'University of Illinois at Urbana-Champaign',
    countries: ['us'],
  },
  {
    name: 'Sorbonne University',
    countries: ['fr'],
  },
  {
    name: 'KU Leuven',
    countries: ['be'],
  },
  {
    name: 'Durham University',
    countries: ['gb'],
  },
  {
    name: 'Yonsei University',
    countries: ['kr'],
  },
  {
    name: 'University of Birmingham',
    countries: ['gb'],
  },
  {
    name: 'Sungkyunkwan University',
    countries: ['kr'],
  },
  {
    name: 'Rice University',
    countries: ['us'],
  },
  {
    name: 'University of Southampton',
    countries: ['gb'],
  },
  {
    name: 'University of Leeds',
    countries: ['gb'],
  },
  {
    name: 'University of Sheffield',
    countries: ['gb'],
  },
  {
    name: 'University of Science and Technology of China',
    countries: ['cn'],
  },
  {
    name: 'University of North Carolina, Chapel Hill',
    countries: ['us'],
  },
  {
    name: 'University of St Andrews',
    countries: ['gb'],
  },
  {
    name: 'Lund University',
    countries: ['se'],
  },
  {
    name: 'KTH Royal Institute of Technology',
    countries: ['se'],
  },
  {
    name: 'University of Nottingham',
    countries: ['gb'],
  },
  {
    name: 'Universidad Nacional Autónoma de México',
    countries: ['mx'],
  },
] as const).map((props) =>
  Object.assign(props, {
    levels: [6, 7, 8] as const,
  }),
);
