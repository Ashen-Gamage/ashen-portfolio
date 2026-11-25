import type { FolderItem } from '@/components/FolderFloat';

export const profile = {
  name: 'Gamhewage Ashen Geeth Gamage', //
  displayName: 'Ashen Gamage', //
  location: 'Sri Lanka', //
  githubHandle: 'Ashen-Gamage', //
  githubUrl: 'https://github.com/Ashen-Gamage',
  headline: 'Data Science Undergraduate, ML & Full-Stack Builder', //
  summary:
    'Undergraduate student at SLIIT pursuing Data Science, building machine learning models, ETL & BI pipelines, statistical analyses, and interactive web & game experiences.', //
  education: [
    {
      institution: 'Sri Lanka Institute of Information Technology (SLIIT)', //
      degree: 'B.Sc. (Hons) in Information Technology / Data Science', //
      period: 'Undergraduate' //
    }
  ],
  leadership: [
    {
      role: 'Organizing Committee Vice President – Marketing (LEGACY’25)', //
      organization: 'AIESEC in SLIIT' //
    }
  ],
  skills: [
    { id: 'python', label: 'Python', meta: 'ML & Data' },
    { id: 'ts', label: 'TypeScript', meta: 'Next.js / React' },
    { id: 'sql', label: 'SQL & SQLite', meta: 'Warehousing' },
    { id: 'sklearn', label: 'scikit-learn', meta: 'Modeling' },
    { id: 'powerbi', label: 'Power BI', meta: 'Analytics' },
    { id: 'r', label: 'R', meta: 'Statistics' },
  ] as FolderItem[], //
  projects: [
    {
      title: 'Ames House Price Prediction (IT3091)', //
      category: 'Machine Learning',
      summary:
        'Categorical missing-value imputation, Dummy Regressor baselines, and Linear Regression modeling.', //
      stack: ['Python', 'pandas', 'scikit-learn'] //
    },
    {
      title: 'Data Warehousing & BI Pipeline (IT3101)', //
      category: 'Data Engineering & BI',
      summary: 'ETL pipeline, SQLite data mart, and interactive Power BI dashboard.', //
      stack: ['Python', 'SQLite', 'Power BI'] //
    },
    {
      title: 'Statistical Modeling in R', //
      category: 'Statistical Modeling',
      summary: 'Statistical modeling group project and presentation built in R.', //
      stack: ['R', 'Statistics'] //
    },
    {
      title: 'sincerely.lk-v2', //
      category: 'Web & Interactive UI',
      summary:
        'Web platform built with Next.js and TypeScript featuring custom SVG elements and scroll-driven Earth zoom transitions.', //
      stack: ['Next.js', 'TypeScript', 'SVG'] //
    },
    {
      title: 'Brawler_AG & Voidline', //
      category: 'Game Dev',
      summary:
        '2D Pygame fighting game packaged with PyInstaller alongside sci-fi game mechanics and storyline concepts.', //
      stack: ['Python', 'Pygame', 'PyInstaller'] //
    }
  ]
};