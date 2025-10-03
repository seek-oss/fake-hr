# fake-hr

[![Powered by skuba](https://img.shields.io/badge/🤿%20skuba-powered-009DC4)](https://github.com/seek-oss/skuba)

fake-hr is a Node.js package that contains limited HR data sets.

It can be plugged into generators like [Chance] and [Faker] to supplement their built-in data sets,
and is intentionally abstracted away from SEEK's own data structures and knowledge graphs.

We use this to generate mock data for our [GraphQL Playground] and [Wingman mockup].

[chance]: https://chancejs.com/
[faker]: https://github.com/marak/Faker.js/
[graphql playground]: https://developer.seek.com/graphql/playground
[wingman mockup]: https://seek-oss.github.io/wingman/

## Table of contents

- [API](#api)
  - [competencies](#competencies)
  - [education.institutions](#educationinstitutions)
  - [education.qualifications](#educationqualifications)
- [Development](#development)
- [Release](#release)

## API

### `competencies`

Get a list of competencies.

```typescript
import { fakeHr } from 'fake-hr';

fakeHr.competencies.all;
// string[]

fakeHr.competencies.all[0];
// Active Learning
```

### `education.institutions`

Get a list of education institutions.

```typescript
import { fakeHr } from 'fake-hr';

fakeHr.education.institutions.all;
// EducationInstitution[]

fakeHr.education.institutions.filter({ country: 'au', level: [6, 7] });
// EducationInstitution[]

fakeHr.education.institutions.all[0];
// {
//   countries: [ 'au' ],
//   name: 'Canberra Institute of Technology',
//   levels: [ 2, 3, 4, 5 ]
// }
```

### `education.qualifications`

Get a list of education qualifications.

```typescript
import { fakeHr } from 'fake-hr';

fakeHr.education.qualifications.all;
// EducationQualification[]

fakeHr.education.qualifications.filter({ level: [2, 3] });
// EducationQualification[]

fakeHr.education.qualifications.all[0];
// {
//   countries: [ 'au' ],
//   level: 2,
//   name: 'Certificate I in Aboriginal and Torres Strait Islander Language and Knowledge Work'
// }
```

## Development

### Prerequisites

- Node.js LTS
- pnpm

```shell
pnpm install
```

### Test

```shell
pnpm run test
```

### Lint

```shell
# fix
pnpm run format

# check
pnpm run lint
```

### Package

```shell
# compile source
pnpm run build

# review bundle
npm pack
```

## Release

This package is published to the public npm registry with a GitHub Actions [release workflow].

The workflow runs on select branches:

```yaml
on:
  push:
    branches:
      - master
```

It depends on this repo being hosted on [seek-oss] with appropriate access.

### Releasing latest

Commits to the `master` branch will be released with the `latest` tag,
which is the default used when running `pnpm install`.

[distribution tags]: https://docs.npmjs.com/adding-dist-tags-to-packages
[release workflow]: .github/workflows/release.yml
[seek-oss]: https://github.com/seek-oss
[semantic-release]: https://github.com/semantic-release/semantic-release
[triggering a release]: https://github.com/semantic-release/semantic-release/#triggering-a-release
