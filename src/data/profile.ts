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
      period: '2025–present · Completed Year 2, Semester 1' //
    },
    {
      institution: 'D.M.C. College',
      degree: 'G.C.E. Advanced Level · Combined Mathematics',
      period: '2021/22 · Physics (C), Chemistry (C), Combined Mathematics (S)'
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
    { id: 'canva', label: 'Canva', meta: 'Design & social content' },
    { id: 'capcut', label: 'CapCut', meta: 'Video editing' },
    { id: 'premiere', label: 'Adobe Premiere Pro', meta: 'Video editing' },
    { id: 'media', label: 'Video & post production', meta: 'Creative media' },
  ] as FolderItem[], //
  projects: [
    {
      title: 'TaxiWebApp', //
      category: 'Software Engineering & Web Dev',
      summary:
        'Uber-style Java web application covering customer ride booking, rider acceptance, cash and card payments, driver wallet calculation, and feedback, built with JavaScript, Java, and SQL Server.', //
      stack: ['JavaScript', 'java', 'SQL Server Management Studio'] //
    },
    {
      title: 'Traffic Volume Analysis(IT3091)', //
      category: 'Statistical Modeling',
      summary:
        'Categorical missing-value imputation, Dummy Regressor baselines, Statistical Prediction Methods and Linear Regression modeling.', //
      stack: ['R', 'Statistics'] //
    },
    {
      title: 'Tourism Booking Demand & Cancellation Analytics', //
      category: 'Data Warehousing & BI',
      summary: ' Data Quality, Warehouse Architecture, Star Schema, ETL pipeline, SQLite data mart, and interactive Power BI dashboard.', //
      stack: ['Python', 'SQLite', 'Power BI'] //
    },
    {
      title: 'House Prices', //
      category: 'Machine Learning & Predictive Modeling',
      summary: 'Price Prediction, Feature Engineering, and Build and compare regression models that predict the sale price of a property using property characteristics available before the sale..', //
      stack: ['Python', 'scikit-learn' , 'pandas'] //
    },
    {
      title: 'Sincerely Sri Lanka', //
      category: 'Web & Interactive UI',
      summary:
      'Web platform built with Next.js and TypeScript featuring custom SVG elements and scroll driven Earth zoom transitions showcasing the beauty of Sri Lanka and travel options.', //
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
