// Todo el contenido del portfolio vive acá: editá este archivo para actualizar textos y links.
// Reemplazá los valores entre corchetes [ASÍ] con tus datos reales.

export const profile = {
  name: 'Agustin González',
  role: 'Full Stack Developer',
  location: 'Neuquén, AR',
  timezone: 'UTC−3',
  email: '[YOUR EMAIL]',
  cv: '[CV LINK]',
  github: 'https://github.com/Agus-IG',
  linkedin: '[LINKEDIN LINK]',
};

export const about = [
  "I'm a full stack developer at Centro Administrativo Ministerial (CAM), where I build and maintain business systems end to end: .NET Web APIs, Oracle schemas and stored procedures, and Angular frontends that people use every day.",
  'I enjoy the parts many developers avoid — data modeling, migrations and legacy modernization — as much as crafting a smooth UI. Outside my main role I take freelance projects and explore new tools like React and Flutter.',
  '[Add years of experience, English level, and what kind of team or product you want to join next.]',
];

export const stack = [
  { group: 'backend', items: ['C#', '.NET / .NET Core', 'ASP.NET Web API'] },
  { group: 'data', items: ['Oracle', 'PL/SQL', 'Stored procedures', 'SQLite'] },
  { group: 'frontend & mobile', items: ['Angular', 'React', 'TypeScript', 'Flutter'] },
  { group: 'workflow', items: ['Git', 'Git Flow', 'GitHub Projects'] },
];

export const projects = [
  {
    kind: 'Freelance · Web platform',
    title: 'La Tanque Barber',
    description:
      'Web platform for a local barbershop: a client landing page with multi-step booking, plus separate dashboards for the admin and for each barber.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: null, // ej: './projects/la-tanque.png' (poné la imagen en /public/projects)
    placeholder: 'screenshot',
    links: [
      { label: 'Live demo', href: '[DEMO LINK]', primary: true },
      { label: 'Code', href: '[REPO LINK]' },
    ],
  },
  {
    kind: 'Personal · Mobile app',
    title: 'Mi Compra',
    description:
      'Shopping list app with barcode scanning. Products are looked up in the Open Food Facts API and lists persist locally with SQLite.',
    tech: ['Flutter', 'SQLite', 'REST API'],
    image: null,
    placeholder: 'screenshot',
    links: [{ label: 'View code', href: '[REPO LINK]', primary: true }],
  },
  {
    kind: 'Case study · Backend',
    title: 'HR Web API',
    description:
      'Human resources backend built as a .NET Web API on top of Oracle, with business logic in PL/SQL stored procedures. [Add the problem it solved and its impact.]',
    tech: ['.NET', 'Oracle', 'PL/SQL'],
    image: null,
    placeholder: 'architecture diagram',
    links: [{ label: 'Read case study', href: '[CASE STUDY LINK]', primary: true }],
  },
  {
    kind: 'Case study · Modernization',
    title: '.NET Framework → .NET Core',
    description:
      'Migration of a production backend from .NET Framework to .NET Core. [Add the main challenges, how you approached them, and the result.]',
    tech: ['.NET Core', 'C#', 'Refactoring'],
    image: null,
    placeholder: 'before / after diagram',
    links: [{ label: 'Read case study', href: '[CASE STUDY LINK]', primary: true }],
  },
];

export const experience = [
  {
    period: '[START YEAR] — Present',
    role: 'Full Stack Developer',
    company: 'Centro Administrativo Ministerial · Neuquén',
    details: [
      'Develop and maintain internal systems with .NET Web APIs, Oracle databases and Angular frontends, including an HR backend and an occupational health module.',
      'Migrated a backend from .NET Framework to .NET Core. Work with Git Flow across the team.',
    ],
  },
  {
    period: '[YEAR] — Present',
    role: 'Freelance Developer',
    company: 'Independent',
    details: ['Web solutions for local businesses, from booking flows to admin dashboards.'],
  },
];
