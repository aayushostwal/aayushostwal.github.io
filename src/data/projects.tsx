import { ExperienceDetails, ProjectDetails } from "../components/types";

const qureSrExp: ExperienceDetails = {
  year: "2022 - PRESENT",
  company: "Senior Backend Engineer, Qure.ai",
  is_internship: false,
  link: "https://qure.ai",
  experience: [
    "Reduced database CPU usage from 50% to under 20%, saving $16K annually.",
    "Built a secure, user-friendly translation app with SSO login, saving $10K annually.",
    "Customized Metabase to support dashboards in 8+ languages with enhanced internationalization.",
    "Developed automated workflows and improved features for a healthcare platform, enhancing user experience.",
  ],
  skills: [
    "Django",
    "Metabase",
    "AWS",
    "Javascript",
    "Celery",
    "Bazel",
    "PostgreSQL",
    "Jenkins",
  ],
  achievements: ["Value Champion Award - 2024"],
};

const hilabsExp: ExperienceDetails = {
  year: "2021 - 22",
  company: "Data Scientist, HiLabs",
  link: "https://hilabs.com",
  is_internship: false,
  experience: [
    "Built an internal directory of U.S. doctors by web-scraping data from 20+ insurance websites.",
    "Cut report generation time for over 1 million records from 2 days to 3 hours using PySpark and Hadoop.",
    "Improved data accuracy by removing 89,000+ invalid addresses, enhancing client report reliability.",
    "Led 20+ sales proof-of-concepts, securing five deals and one major data validation contract.",
  ],
  skills: ["PySpark", "Scala", "Hadoop", "Bash"],
};

const materateExp: ExperienceDetails = {
  year: "MAY - JULY 2020",
  company: "Data Analyst, Materate Education",
  link: "null",
  is_internship: true,
  experience: [
    "Constructed Agglomerative Clusters to identify different groups of students for Randomized Control Trials.",
    "Generated test reports for all stakeholders from students’ responses using HTML and Python automatically.",
  ],
  skills: ["Pandas", "Numpy", "Python"],
};

// Project Details
const website: ProjectDetails = {
  heading: "Personal Website",
  link: "https://github.com/aayushostwal/aayushostwal.github.io",
  desc: "Build personal website using Vite.js and github pages",
  thumbnail:
    "https://images.unsplash.com/photo-1590595906931-81f04f0ccebb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};
export default {
  qureSrProject: qureSrExp,
  hilabsProject: hilabsExp,
  website,
  materateProject: materateExp,
};
