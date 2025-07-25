/**
 * Non-exhaustive list of degrees.
 *
 * {@link https://en.wikipedia.org/w/index.php?title=List_of_tagged_degrees&oldid=964753183}
 */

import type { EducationQualification } from '../../types.js';

export const associates: EducationQualification[] = [
  ...[
    'Administration of Justice',
    'Advertising',
    'Agribusiness',
    'Animal Management',
    'Architectural Building Engineering Technology',
    'Architecture and Career Options',
    'Art',
    'Automotive Maintenance Technology',
    'Aviation Mechanics',
    'Behavioral Science',
    'Boat Mechanics',
    'Boat Repair and Maintenance',
    'Cabinet Design Technology',
    'Child Development: Program Summary',
    'Christian Ministry',
    'Cosmetology Business',
    'Digital Media',
    'Early Childhood Special Education',
    'Education',
    'Elementary Education',
    'English',
    'Environmental Science',
    'Environmental Studies',
    'General Psychology',
    'History and Information',
    'Interdisciplinary Studies',
    'International Relations',
    'Landscape Architecture',
    'Landscaping Design',
    'Library Science',
    'Music',
    'Wildlife Management',
  ].map((area) => `Associate Degree in ${area}`),
  ...[
    'Applied Science in Accelerated Culinary Arts',
    'Applied Science in Accounting Specialist',
    'Applied Science in Administrative Support',
    'Applied Science in Baking and Pastry',
    'Applied Science in Business Administration - Finance',
    'Applied Science in Business Administration',
    'Applied Science in Business Information Systems',
    'Applied Science in Civil Justice - Law Enforcement',
    'Applied Science in Clinical Medical Assisting',
    'Applied Science in Computer Applications',
    'Applied Science in Computer Electronics',
    'Applied Science in Computer Game Design',
    'Applied Science in Computer Information Systems',
    'Applied Science in Culinary Arts',
    'Applied Science in Digital Media Communications',
    'Applied Science in Digital Photography',
    'Applied Science in Electronic Engineering',
    'Applied Science in Emergency Medical Services',
    'Applied Science in Health Care Management',
    'Applied Science in Health Information Management',
    'Applied Science in Healthcare Administration',
    'Applied Science in Legal Office E-ministration',
    'Applied Science in Telecommunications Technology',
    'Applied Science in Television Production',
    'Applied Science in Visual Communications',
    'Arts and Science',
    'Arts in Computer Information Systems',
    'Arts in Interior Architecture and Design',
    'Arts in Internetworking Technology',
    'Arts in Psychology',
    'Biotechnology',
    'Business Science in Individualized Studies',
    'Early Childhood Education',
    'Occupational Studies in Legal Office Administration',
    'Science in Computer Information Science',
    'Science in Computer Science',
    'Science in Corrections, Probation, & Parole',
    'Science in Electronics Engineering Technology',
    'Science in Industrial Maintenance Technology',
    'Science in Interactive & Graphic Art',
  ].map((area) => `Associate of ${area}`),
].map((name) => ({ level: 5, name }) as const);

export const bachelors: EducationQualification[] = [
  'Accountancy',
  'Architecture',
  'Arts in American Indian Studies',
  'Arts in American Studies',
  'Arts in Anthropology',
  'Arts in Applied Psychology',
  'Arts in Biology',
  'Arts in Child Advocacy',
  'Arts in Clinical Psychology',
  'Arts in Communication',
  'Arts in Forensic Psychology',
  'Arts in Organizational Psychology',
  'Biochemistry',
  'Biomedical Science',
  'Business Administration',
  'Clinical Science',
  'Commerce',
  'Community Health',
  'Computer Applications',
  'Computer Information Systems',
  'Criminal Justice',
  'Divinity',
  'Economics',
  'Education',
  'Engineering',
  'Fine Arts',
  'Information Systems',
  'Letters',
  'Management',
  'Music in Composition',
  'Music in Jazz Studies',
  'Music in Music Education',
  'Music in Performance',
  'Music in Theory',
  'Music',
  'Pharmacy',
  'Philosophy',
  'Public Affairs and Policy Management',
  'Science in Accountancy',
  'Science in Actuarial',
  'Science in Aerospace Engineering',
  'Science in Agriculture',
  'Science in Applied Economics',
  'Science in Architectural Engineering',
  'Science in Architecture',
  'Science in Athletic Training',
  'Science in Bible',
  'Science in Biology',
  'Science in Biomedical Engineering',
  'Science in Business Administration - Computer Application',
  'Science in Business Administration - Economics',
  'Science in Business Administration',
  'Science in Business and Technology',
  'Science in Chemical Engineering',
  'Science in Chemistry',
  'Science in Civil Engineering',
  'Science in Clinical Laboratory Science',
  'Science in Cognitive Science',
  'Science in Computer Engineering',
  'Science in Computer Science',
  'Science in Construction Engineering',
  'Science in Construction Management',
  'Science in Construction Technology',
  'Science in Criminal Justice',
  'Science in Criminology',
  'Science in Diagnostic Radiography',
  'Science in Education',
  'Science in Electrical Engineering',
  'Science in Engineering Physics',
  'Science in Engineering Science',
  'Science in Engineering Technology',
  'Science in English Literature',
  'Science in Environmental Engineering',
  'Science in Environmental Science',
  'Science in Environmental Studies',
  'Science in Food Science',
  'Science in Foreign Service',
  'Science in Forensic Science',
  'Science in Forestry',
  'Science in Genetic Engineering and Biotechnology',
  'Science in History',
  'Science in Hospitality Management',
  'Science in Human Resources Management',
  'Science in Industrial Engineering',
  'Science in Information Systems',
  'Science in Information Technology',
  'Science in Integrated Science',
  'Science in International Relations',
  'Science in Journalism',
  'Science in Legal Management',
  'Science in Management',
  'Science in Manufacturing Engineering',
  'Science in Marketing',
  'Science in Mathematics',
  'Science in Mechanical Engineering',
  'Science in Medical Technology',
  'Science in Metallurgical Engineering',
  'Science in Meteorology',
  'Science in Microbiology',
  'Science in Military and Strategic Studies',
  'Science in Mining Engineering',
  'Science in Molecular Biology',
  'Science in Neuroscience',
  'Science in Nursing',
  'Science in Nutrition Science',
  'Science in Petroleum Engineering',
  'Science in Pharmacology',
  'Science in Pharmacy',
  'Science in Physical Therapy',
  'Science in Physics',
  'Science in Physiology',
  'Science in Plant Science',
  'Science in Podiatry',
  'Science in Politics',
  'Science in Psychology',
  'Science in Public Safety',
  'Science in Quantity Surveying Engineering',
  'Science in Radiologic Technology',
  'Science in Real-Time Interactive Simulation',
  'Science in Religion',
  'Science in Respiratory Therapy',
  'Science in Risk Management and Insurance',
  'Science in Science Education',
  'Science in Software Engineering',
  'Science in Sports Management',
  'Science in Systems Engineering',
  'Science in Veterinary Technology',
  'Social Work',
  'Technology',
].map((area) => ({ level: 6, name: `Bachelor of ${area}` }) as const);

export const masters: EducationQualification[] = [
  'Master in Creative Technologies',
  ...[
    'Accountancy',
    'Accounting and Information Systems',
    'Advanced Study',
    'Applied Finance',
    'Applied Mathematical Sciences',
    'Applied Psychology',
    'Applied Science',
    'Architecture',
    'Arts in Archives and Records Management',
    'Arts in Bioethics',
    'Arts in Liberal Studies',
    'Arts in Museum Studies',
    'Arts in Strategic Communication Management',
    'Arts in Teaching',
    'Arts',
    'Athletic Training',
    'Bioethics',
    'Bioinformatics',
    'Biotechnology',
    'Business Administration Management of Technology',
    'Business Administration',
    'Business Economics',
    'Business Engineering',
    'Business Informatics',
    'Business',
    'Chemistry',
    'City Planning',
    'Commerce',
    'Communication',
    'Community Health',
    'Computational Finance',
    'Computer Applications',
    'Computer Science',
    'Counseling',
    'Counselling',
    'Criminal Justice',
    'Design',
    'Divinity',
    'Economics',
    'Education',
    'Educational Technology',
    'Engineering Management',
    'Engineering',
    'Enterprise',
    'European Law',
    'Finance',
    'Financial Economics',
    'Financial Engineering',
    'Financial Mathematics',
    'Fine Arts',
    'Geospatial Science & Technology',
    'Health Administration',
    'Health Science',
    'Humanities',
    'Industrial and Labor Relations',
    'Information Management',
    'Information System Management',
    'Information Systems',
    'Information',
    'International Affairs',
    'International Business',
    'International Economics',
    'International Public Policy',
    'International Studies',
    'Islamic Studies',
    'IT',
    'Jurisprudence',
    'Landscape Architecture',
    'Laws',
    'Letters',
    'Liberal Arts',
    'Library and Information Science',
    'Management',
    'Mass Communication and Journalism',
    'Mathematical Finance',
    'Mathematics and Computer Science',
    'Mathematics and Philosophy',
    'Mathematics',
    'Medical Science',
    'Medicine',
    'Military Art and Science',
    'Music',
    'Network and Communications Management',
    'Occupational Therapy',
    'Pharmacy',
    'Philosophy',
    'Physician Assistant Studies',
    'Physics',
    'Political Science',
    'Professional Studies',
    'Psychology',
    'Public Administration',
    'Public Affairs',
    'Public Diplomacy',
    'Public Health',
    'Public Management',
    'Public Policy',
    'Public Relations',
    'Public Service',
    'Quantitative Finance',
    'Rabbinic Studies',
    'Real Estate Development',
    'Religious Education',
    'Research',
    'Sacred Music',
    'Sacred Theology',
    'Science in Applied Cognition and Neuroscience',
    'Science in Athletic Training',
    'Science in Bioinformatics',
    'Science in Business Analytics',
    'Science in Clinical Epidemiology',
    'Science in Computing Research',
    'Science in Cyber Security',
    'Science in Development Administration',
    'Science in Education',
    'Science in Engineering',
    'Science in Finance',
    'Science in Governance & Organizational Sciences',
    'Science in Government Contracts',
    'Science in Health Informatics',
    'Science in Human Resource Development',
    'Science in Information Assurance',
    'Science in Information Systems',
    'Science in Information Technology',
    'Science in Leadership',
    'Science in Management',
    'Science in Nursing',
    'Science in Project Management',
    'Science in Quality Assurance',
    'Science in Risk Management',
    'Science in Supply Chain Management',
    'Science in Taxation',
    'Science in Teaching',
    'Science',
    'Social Science',
    'Social Work',
    'Statistics',
    'Strategic Studies',
    'Studies in Law',
    'Studies',
    'Surgery',
    'Technology',
    'Theological Studies',
    'Theology',
    'Urban Planning',
    'Veterinary Science',
  ].map((area) => `Master of ${area}`),
].map((name) => ({ level: 7, name }) as const);

export const doctorals: EducationQualification[] = [
  'Arts',
  'Audiology',
  'Aviation',
  'Business Administration',
  'Canon Law',
  'Chiropractic',
  'Commerce',
  'Community Health',
  'Dental Surgery',
  'Divinity',
  'Education',
  'Engineering',
  'Fine Arts',
  'Health Administration',
  'Health Science',
  'Juridical Science; Juris Doctor',
  'Law; Legum Doctor',
  'Liberal Studies',
  'Management',
  'Medicine',
  'Ministry',
  'Modern Languages',
  'Musical Arts',
  'Naturopathic Medicine',
  'Optometry',
  'Osteopathic Medicine',
  'Pharmacy',
  'Philosophy',
  'Public Administration',
  'Radio Oncology',
  'Science',
  'Theology',
  'Veterinary Medicine',
].map((area) => ({ level: 8, name: `Doctor of ${area}` }) as const);
