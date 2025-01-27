import { ArticleDetails } from "../components/types";
const ArticleTags = {
  web_dev: "Web Development",
  django: "Django",
  dev_ops: "DevOps",
  js: "JavaScript",
  react: "React",
  database: "Databases",
  // ai: "Artificial Intelligence",
  ml: "Machine learning",
  dl: "Deep Learning",
  web_scraping: "Web Scraping",
  data_analysis: "Data Analysis",
  math: "Math",
  time_series: "Time Series",
  interview: "Interview",
};
const ArticleList: ArticleDetails[] = [
  {
    heading: "Understanding Django Signals Handler🔥",
    summary:
      "Understand Django Documentation and code!",
    link: "https://medium.com/gitconnected/understanding-django-signals-handler-7eb611834b87",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:2000/format:webp/0*0G3DSWntx7tKLyYS",
    tags: [ArticleTags.django],
  },
  {
    heading: "Access your Servers from Jenkins using Teleport t-bot.",
    summary:
      "Setup t-bot in just 10 mins. No more IPs management!. Shift to a smarter way to up scale your application Now!",
    link: "https://levelup.gitconnected.com/access-your-servers-from-jenkins-using-teleport-t-bot-ab117ba07758",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/1*jr-JcoaGEbi6qBKdk3dg_w.jpeg",
    tags: [ArticleTags.dev_ops],
  },
  {
    heading: "Why Nested Transactions Can Be Harmful for your Application!",
    summary:
      "Even Amazon faced this issue and shifted to Postgres from Oracle.",
    link: "https://levelup.gitconnected.com/why-nested-transactions-can-be-harmful-for-your-application-bf7a5dee73fc",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*qQbtxEr8prqJHmCWiECScg.png",
    tags: [ArticleTags.database],
  },
  {
    heading: "Deep Dive into Database Indexing: A Technical Overview",
    summary:
      "A Comprehensive Technical Guide to Mastering PostgreSQL Database Indexing",
    link: "https://levelup.gitconnected.com/deep-dive-into-database-indexing-a-technical-overview-c66b28075ee9",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/0*ijoK3ArEtls_iMP4",
    tags: [ArticleTags.django, ArticleTags.database],
  },
  {
    heading:
      "Demystifying Django Model Relations: Insights from the Database Layer",
    summary:
      "Ever wondered what happens behind the scenes when you define relationships between models in Django?",
    link: "https://levelup.gitconnected.com/demystifying-django-model-relations-insights-from-the-database-layer-b34b4e1cd2d1",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*yaSZeLIyBh8ftc6X",
    tags: [ArticleTags.django, ArticleTags.database],
  },
  {
    heading: "Make your Django App Production Ready",
    summary:
      "A blend approach of gunicorn and nginx to make your django app production ready.",
    link: "https://medium.com/illumination/make-your-django-app-production-ready-cd9f91457696",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*q8JxhYJ2dcmI7oHDJjvL2g.png",
    tags: [ArticleTags.django, ArticleTags.web_dev],
  },
  {
    heading: "Deploy a React & Mantine Website on GitHub Pages",
    summary:
      "Creating a portfolio website can be a transformative step in your professional journey. It offers a personalized, professional platform to highlight your skills, showcase your work, and celebrate your achievements.",
    link: "https://aayushostwal.medium.com/host-website-on-github-in-react-mantine-e3f04c4fc811",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*PdF3a-jwIuDwAjbVGtjtig.png",
    tags: [ArticleTags.react, ArticleTags.js],
  },
  {
    heading: "Benchmark and Profile Django APIs Graphically",
    summary:
      "Are API Calls taking too long? Need to debug where your code is taking a significant amount of time? Use these methods to profile your Django API.",
    link: "https://aayushostwal.medium.com/benchmark-and-profile-django-apis-graphically-40feb81f112c",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/0*7fu5hlibgr1pP2oA",
    tags: [ArticleTags.django, ArticleTags.web_dev],
  },
  {
    heading:
      "SSH: Architecture, Configuration, And Applications (SSH, SCP, SFTP, Tunneling)",
    summary:
      "Even BitBucket is now using the power of SSH by enabling APP Passwords",
    link: "https://medium.com/nerd-for-tech/ssh-architecture-and-applications-ssh-scp-sftp-tunneling-or-port-forwarding-bd495fedeff7",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*ApjL3ek8nGVKHoVHiTXA9g.png",
    tags: [ArticleTags.dev_ops, ArticleTags.web_dev],
  },
  {
    heading: "Optimizing Web Scraping from 15 Hours to 3 minutes.",
    summary:
      "Web Scraping is a pool to learn about full-stack development. How an API works? What happens when I hit a URL? How does content on my webpage gets loaded?",
    link: "https://aayushostwal.medium.com/optimizing-web-scraping-from-15-hours-to-3-minutes-e9435d88d03e",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*WnX-F5t1-sxLE17H9r2ZFA.jpeg",
    tags: [ArticleTags.web_dev, ArticleTags.web_scraping],
  },
  {
    heading: "How to Organize and Structure Your Code?",
    summary: "These steps can change your perception of writing code!",
    link: "https://medium.com/nerd-for-tech/how-to-organize-and-structure-your-code-bb394c42f935",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/0*bGQwbDC6b3FFOD-e",
    tags: [ArticleTags.web_dev],
  },
  {
    heading: "Is making a Good Resume for Data Science Enough?",
    summary: "4 things you must do before any interview.",
    link: "https://towardsdatascience.com/is-making-a-good-resume-for-data-science-enough-20d4f8f4b740",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/0*k945Xds3cegAJIvd.gif",
    tags: [ArticleTags.interview],
  },
  {
    heading: "High Variance to High Bias via “Perfection”",
    summary:
      "Overfitting and underfitting are very common problems and we have specified methods and tools to deal with them. Although, the basic science behind all the methods is the same, and is worth mentioning too.",
    link: "https://towardsdatascience.com/high-variance-to-high-bias-via-perfection-fd69de3a1237",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*fKBM6_gYwS1vOKv1.jpeg",
    tags: [ArticleTags.dl],
  },
  {
    heading: "Interview Preparation For Data Science",
    summary: "Collected experience of IIT Kanpur students",
    link: "https://medium.com/nerd-for-tech/interview-preparation-for-data-science-6aa3d3900d55",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*GbhoZe-G1552CxXtz7b2ZA.jpeg",
    tags: [ArticleTags.interview],
  },
  {
    heading: "How I cracked my Data Science Interview",
    summary:
      "Experience of IIT Kanpur, one of the prestigious colleges in India",
    link: "https://medium.com/analytics-vidhya/how-i-cracked-my-data-science-interview-16654f250178",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:640/format:webp/1*LfUmd6-TI6TXt5NlVc8_bA.jpeg",
    tags: [ArticleTags.interview],
  },
  {
    heading: "Five Obstacles faced in Linear Regression",
    summary:
      "These five obstacles may occur when you train a linear regression model on your data set.",
    link: "https://towardsdatascience.com/five-obstacles-faced-in-linear-regression-80fb5c599fbc",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*pFJllKYrVJXqxx1-tYOQwg.jpeg",
    tags: [ArticleTags.ml],
  },
  {
    heading: "Test for existence of a Trend in a Time Series",
    summary:
      "Relative Order Test for testing the existence of a Trend in a Time series.",
    link: "https://towardsdatascience.com/test-for-existence-of-a-trend-in-a-time-series-3a44f242c329",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Vo4g-rTaI-JMzec02vbk4w.jpeg",
    tags: [ArticleTags.time_series],
  },
  {
    heading: "14 Data Visualization Plots of Seaborn",
    summary:
      "Tools for the cops who investigate data and extract information and trends from it.",
    link: "https://towardsdatascience.com/14-data-visualization-plots-of-seaborn-14a7bdd16cd7",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:2694/format:webp/1*IQNY_q20UImHGlp2aJRtYQ.jpeg",
    tags: [ArticleTags.data_analysis],
  },
  {
    heading: "The Art of Dimensionality Reduction",
    summary:
      "DR is one of the most critical steps of the predictive modeling problem. The world is generating a large amount of data with large dimensions. Hence it is crucial to optimize the dimensional space of the data.",
    link: "https://medium.com/analytics-vidhya/the-art-of-dimensionality-reduction-80fded9726c5",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Bvw5-dQ-XHIgDk3n9ixkMw.jpeg",
    tags: [ArticleTags.dl],
  },
  {
    heading: "First Steps in Time Series Analysis",
    summary:
      "Time Series (TS) is considered to be one of the less known skills in the data science space. This article is a self-starter to the concepts in TS and a lot more coming.",
    link: "https://medium.com/analytics-vidhya/first-steps-in-time-series-analysis-23410f5d5254",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*YYFPKLxuEMMLMigc02JWyA.jpeg",
    tags: [ArticleTags.time_series],
  },
  {
    heading: "Probability-101 for Data Science",
    summary:
      "A complete theoretical guide to probability and concepts required for data science and machine learning.",
    link: "https://medium.com/hands-on-data-science/probability-101-for-data-science-e4a87e294d1f",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*oKyfMtQvDoBwJXdwCmSMXw.jpeg",
    tags: [ArticleTags.math],
  },
  {
    heading: "The EDA Theoretical Guide",
    summary: "A complete guide to exploratory data analysis",
    link: "https://towardsdatascience.com/the-eda-theoretical-guide-b7cef7653f0d",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*6KtxP_SAPZ6KgOUlx4tK5Q.jpeg",
    tags: [ArticleTags.data_analysis],
  },
  {
    heading: "New Ways for Optimizing Gradient Descent",
    summary:
      "These ways will take your deep learning application to the next level of accuracy.",
    link: "https://aayushostwal.medium.com/new-ways-for-optimizing-gradient-descent-42ce313fccae",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*__LwBKMb2rNA2a2Q0K_I8Q.jpeg",
    tags: [ArticleTags.dl],
  },
  {
    heading: "A, B, Cs… of Deep Learning Hyperparameters",
    summary:
      "Hyperparameters: A boon or curse, you decide. Well, we all know “AI is the new electricity”, indistinguishably we need the power and knowledge to synthesize and control it.",
    link: "https://medium.com/towards-data-science/a-b-cs-of-deep-learning-hyperparameters-4d5de9a37de1",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*s40YA6taPC3nt1vwAt_heg.jpeg",
    tags: [ArticleTags.dl],
  },
  {
    heading: "HTML and Text to PDF using Python",
    summary:
      "The Data science world has evolved with visualization techniques, but it's of no use if we can not generate reports at the end of the day…",
    link: "https://aayushostwal.medium.com/html-and-text-to-pdf-using-python-7718a05706e4",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*QKcLHePKOSLThuMkzE0keg.jpeg",
    tags: [ArticleTags.web_dev],
  },
  {
    heading: "Breaking Symmetry in Deep Learning",
    summary:
      "Initializing weights to zero matrices in an L-Layered Deep Learning Model may lead to a decrease in the cost but no change in weights…",
    link: "https://towardsdatascience.com/breaking-symmetry-in-deep-learning-fa5c67270b1d",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/0*8plBH7WOJn33HIPD",
    tags: [ArticleTags.dl],
  },
  {
    heading:
      "A step by step process to deal with a Predictive Analytical Problem",
    summary:
      "What is a machine learning project? What really a predictive analytical problem statement is? How we are going to solve this? These…",
    link: "https://towardsdatascience.com/a-step-by-step-process-to-deal-with-a-predictive-analytical-problem-bee174b68653",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:720/format:webp/1*CIwD4UzoXVtFrfHyrLx4Bw.jpeg",
    tags: [ArticleTags.data_analysis],
  },
  {
    heading: "Magic Of Calculus: Linear Regression",
    summary:
      "Human behavior exceptionally has great reserves of knowledge and technology. We are trying to understand and generate as much as we can…",
    link: "https://towardsdatascience.com/magic-of-calculus-linear-regression-ad84686371c3",
    thumbnail:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*9tAqPEooTx2aC00RbIOrMw.png",
    tags: [ArticleTags.ml],
  },
];

export default {
  ArticleTags,
  ArticleList,
};
