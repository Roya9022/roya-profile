import type { Project } from '@/types';
import text from '@/content/text.json';
import {
  GITHUB_LINK,
  DONATION_APP_LINK_LIVE,
  PROFILE_ENDPOINT,
  HEALTHCARE_DASHBOARD_ENDPOINT,
  DONATION_APP_ENDPOINT,
} from '@/constants/links';

const myProjectsText = text.myProjects;

export const projects: (Project & { github: string; live?: string })[] = [
  {
    id: 0,
    name: myProjectsText.retroName,
    iconSrc: '/my-projects/portfolio.png',
    size: myProjectsText.retroSize,
    description: myProjectsText.retroDesc,
    tags: [myProjectsText.react, myProjectsText.tailwind, myProjectsText.typescript],
    github: `${GITHUB_LINK}${PROFILE_ENDPOINT}`,
  },
  {
    id: 1,
    name: myProjectsText.donationName,
    iconSrc: '/my-projects/donation.png',
    size: myProjectsText.donationSize,
    description: myProjectsText.donationDesc,
    tags: [myProjectsText.next, myProjectsText.tailwind, myProjectsText.typescript],
    github: `${GITHUB_LINK}${DONATION_APP_ENDPOINT}`,
    live: DONATION_APP_LINK_LIVE,
  },
  {
    id: 2,
    name: myProjectsText.healthcareName,
    iconSrc: '/my-projects/healthcare.png',
    size: myProjectsText.healthcareSize,
    description: myProjectsText.healthcareDesc,
    tags: [myProjectsText.react, myProjectsText.tailwind, myProjectsText.typescript],
    github: `${GITHUB_LINK}${HEALTHCARE_DASHBOARD_ENDPOINT}`,
  },
];
