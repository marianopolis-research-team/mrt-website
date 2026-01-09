export interface LabProject {
  year: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  status: 'completed' | 'in-progress' | 'planning';
  applicationUrl?: string;
  
  timeline?: {
    phase: string;
    description: string;
    status?: 'completed' | 'in-progress' | 'upcoming';
  }[];
  
  researchQuestions?: string[];
  
  methods?: {
    title: string;
    description: string;
  }[];
  
  projectDetails: {
    timeline: string;
    teamSize: string;
    publication: string;
  };
}

export const labProjects: LabProject[] = [
  {
    year: '2025-2026',
    slug: 'supercooling-2026',
    title: 'Supercooling Fruits: Effects on Food Preservation',
    shortDescription: 'Investigating the fascinating phenomenon of supercooling and its practical applications in food preservation.',
    fullDescription: 'Our 2026 research project investigates the fascinating phenomenon of supercooling and its practical applications in food preservation. This experiment explores how controlled supercooling affects the cellular structure, nutritional content, and longevity of various fruits, potentially revolutionizing food storage methods.',
    status: 'in-progress',
    applicationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeCi9QrOVWp9tC5Gy3y2mw621uwWzfuUr3HEAW2lFXtQSMzNQ/viewform?usp=dialog',
    timeline: [
      {
        phase: 'Experimental Design',
        description: 'Collaborate on developing the lab procedure and methodology',
        status: 'in-progress',
      },
      {
        phase: 'Hands-On Experimentation',
        description: 'Participate in the supercooling experiment during activity period',
        status: 'upcoming',
      },
      {
        phase: 'Scientific Writing Workshop',
        description: 'Attend mandatory workshop to learn research paper structure and analysis techniques',
        status: 'upcoming',
      },
      {
        phase: 'Analysis & Writing',
        description: 'Contribute to data analysis and write sections of the final research paper',
        status: 'upcoming',
      },
      {
        phase: 'Publication',
        description: 'Co-author the final paper published on our website and shared with the research community',
        status: 'upcoming',
      },
    ],
    researchQuestions: [
      'How does supercooling affect the cellular structure of different fruit types?',
      'What is the impact of supercooling on nutritional content preservation compared to traditional freezing?',
      'Can supercooling extend the shelf life of fruits without compromising texture and flavor?',
      'What are the optimal supercooling conditions for different fruit species?',
    ],
    projectDetails: {
      timeline: 'Experiment during activity period\nWriting at your own pace',
      teamSize: 'Collaborative groups\nAll experience levels welcome',
      publication: 'Published on MRT website\nFeatured by researchers',
    },
  },
  {
    year: '2024-2025',
    slug: 'dna-extraction-2024',
    title: 'Fruit DNA Extraction and Analysis',
    shortDescription: 'Determining DNA yield of different fruit samples and investigating the influence of growing conditions.',
    fullDescription: 'This project aimed to determine the DNA yield of different fruit samples and investigate the influence of growing conditions on DNA concentration. Using ethanol precipitation and the Diphenylamine Method for quantitative DNA estimation, students gained hands-on experience in molecular biology techniques.',
    status: 'completed',
    timeline: [
      {
        phase: 'Info Session',
        description: 'Introduction to the project and methodology (October 10th, Room A-369)',
        status: 'completed',
      },
      {
        phase: 'Scientific Essay Writing Workshop',
        description: 'With Professor Pierre-Alexandre Mailhot (October 15th, Room D-120A)',
        status: 'completed',
      },
      {
        phase: 'Science Fair Prep Session',
        description: 'Executives discussed research projects (November 14th, 2024)',
        status: 'completed',
      },
      {
        phase: 'Research Challenge',
        description: 'Students helped develop the lab protocol (January 2025)',
        status: 'completed',
      },
      {
        phase: 'DNA Standard Curve',
        description: 'Preparation of chemicals and establishing standard curves (February 18, 2025)',
        status: 'completed',
      },
      {
        phase: 'DNA Extraction Lab',
        description: 'Main experimental phase (February 20, 2025)',
        status: 'completed',
      },
    ],
    methods: [
      {
        title: 'DNA Extraction Using Ethanol Precipitation',
        description: 'Standard method for isolating DNA from fruit samples using ethanol-based precipitation techniques.',
      },
      {
        title: 'Quantitative DNA Concentration Estimation',
        description: 'Used the Diphenylamine Method to accurately measure DNA concentration in extracted samples.',
      },
    ],
    projectDetails: {
      timeline: 'October 2024 - February 2025',
      teamSize: 'MRT Research Team 2024-2025',
      publication: 'Completed & Published',
    },
  },
  {
    year: '2023-2024',
    slug: 'wastewater-analysis-2023',
    title: 'Wastewater Analysis Through Biofluorescence',
    shortDescription: 'Exploring innovative methods for wastewater analysis using biofluorescence techniques.',
    fullDescription: 'This project explored innovative methods for wastewater analysis using biofluorescence techniques. Students investigated how fluorescent properties could be used to detect and analyze various components in wastewater samples, contributing to environmental monitoring and public health research.',
    status: 'completed',
    methods: [
      {
        title: 'Biofluorescence Techniques',
        description: 'Utilized fluorescent microscopy and spectroscopy to identify biological markers in wastewater.',
      },
      {
        title: 'Environmental Monitoring',
        description: 'Developed methods for assessing water quality and detecting contaminants.',
      },
      {
        title: 'Data Analysis',
        description: 'Applied statistical methods to interpret fluorescence data and draw meaningful conclusions.',
      },
    ],
    projectDetails: {
      timeline: '2023-2024 Academic Year',
      teamSize: 'MRT Research Team 2023-2024',
      publication: 'Completed',
    },
  },
];

export function getLabProjectBySlug(slug: string): LabProject | undefined {
  return labProjects.find((project) => project.slug === slug);
}

export function getCurrentLabProject(): LabProject | undefined {
  return labProjects.find((project) => project.status === 'in-progress');
}
