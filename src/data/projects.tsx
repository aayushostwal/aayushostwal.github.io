import { ProjectDetails } from "../components/types";

const qureSrProject: ProjectDetails = {
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

const hilabsProject: ProjectDetails = {
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

const materateProject: ProjectDetails = {
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

export default {
  qureSrProject,
  hilabsProject,
  materateProject,
};
