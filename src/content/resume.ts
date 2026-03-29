export const profile = {
  name: "Nowell Strite",
  title: "Cloud Architect",
  location: "Huntington, Vermont",
  email: "nowell@strite.org",
  website: "nowell.strite.org",
  phone: "703-740-7552",
  github: "https://github.com/nowells",
  linkedin: "https://www.linkedin.com/in/nowellstrite",
  summary:
    "Technology leader with 20+ years building platforms at scale—from public media to energy tech to cloud and GPU-accelerated infrastructure. Rooted in Vermont's Green Mountains, driven by open source values and thoughtful architecture.",
};

export const experience = [
  {
    company: "NVIDIA",
    title: "Cloud Architect (NGC Platform)",
    period: "April 2021 – Present",
    highlights: [
      "Building foundational web technology for the NGC Platform, enabling cloud-native GPU-accelerated services across Omniverse, DriveSIM, and NGC.",
    ],
  },
  {
    company: "Oracle",
    title: "Principal Applications Architect (Web Platform Team)",
    period: "2017 – 2021",
    highlights: [
      "Turned an Innovation Day prototype into a critical visual workflow tool for collecting, comparing, publishing, and deploying application configurations across product lines—reducing implementation and setup costs by 50%.",
      "Architected the migration of 50+ customer energy insight widgets from iframes to native custom elements, drastically improving load time and integration experience.",
      "Led the ingress routing datacenter migration to Oracle Cloud, converting 20,000+ lines of hand-crafted nginx/HAProxy configuration into tested, consistent F5 iRule-driven ingress rules.",
    ],
  },
  {
    company: "Opower (acquired by Oracle)",
    title: "Software Architect",
    period: "2015 – 2017",
    highlights: [
      "Hired, mentored, and led backend and frontend web platform engineers.",
      "Built sales demo injection tools to configure real product demos on demand, injected directly into customer sites with full branding match.",
      "Led merger & acquisition licensing compliance audit and remediation across a diverse set of applications and repositories.",
      "Developed a Slack bot that became central to organization-wide workflows, surfacing JIRA, GitHub, Jenkins, Nomad, and PagerDuty context into conversations.",
    ],
  },
  {
    company: "Opower (acquired by Oracle)",
    title: "Senior Software Developer",
    period: "October 2013 – 2015",
    highlights: [
      "Turned an Innovation Day project into the foundational SDK and production content server powering all client-facing websites and embedded SDK—serving over one million requests per day.",
      "Established a Docker-based autoscaling Jenkins infrastructure in AWS CloudFormation with a standardized Groovy Pipeline DSL for CI/CD.",
      "Built an application relationship graph visualization tool for discoverability and onboarding across the microservice ecosystem.",
    ],
  },
  {
    company: "WiserTogether, Inc.",
    title: "Principal Engineer",
    period: "February 2013 – September 2013",
    highlights: [
      "Led development of an interactive D3.js-powered healthcare decision visualization tool.",
      "Developed a foundational JavaScript framework for external contractors built on Backbone.js.",
      "Established automated frontend testing with Mocha/Chai/Karma and open-sourced several Backbone.js testing libraries.",
    ],
  },
  {
    company: "Draker Laboratories",
    title: "Director of Software Engineering",
    period: "2011 – 2013",
    highlights: [
      "Architected a scalable time-series data system replacing MySQL with Clojure, Cassandra, and RabbitMQ.",
      "Established Agile processes that moved the team from monthly to multiple-per-week releases.",
      "Designed and led a technical product merger in two months for differentiation at the largest industry trade show.",
      "Grew the engineering team from 5 to 15 members spanning QA, Design, DevOps, and Development.",
      "Automated internationalization (i18n) of the web application into Japanese.",
    ],
  },
  {
    company: "Public Broadcasting Service",
    title: "Senior Manager of Technology Solutions",
    period: "2005 – 2011",
    highlights: [
      "Launched the nationally recognized PBS LearningMedia service powering 40+ PBS/partner educational sites.",
      "Architected the RESTful API for the educational content service behind PBS LearningMedia.",
      "Designed and converted the system to auto-scaling, load-balanced clusters with configuration management for automated deployments.",
      "Managed a team of 5 developers plus off-site contractors, growing the technical team from 2 to 6.",
      "Crafted and implemented a software development lifecycle tailored to the culture of PBS.",
    ],
  },
];

export const contributions = [
  {
    label: "Patent #US20200226697A1",
    description: "Interactive analytics platform responsive to data inquiries",
    url: "https://patents.google.com/patent/US20200226697A1/en?inventor=Nowell+Strite&oq=Nowell+Strite",
  },
  {
    label: "NodeJS prom-client",
    description: "Improved Prometheus metrics client performance by 70%",
    url: "https://github.com/siimon/prom-client/pulls?q=is%3Apr%20author%3Anowells",
  },
  {
    label: "JSON Forms",
    description: "Improved rendering performance by 90%",
    url: "https://github.com/eclipsesource/jsonforms/pull/1214",
  },
  {
    label: "AVA test runner",
    description: "Added test logging capabilities",
    url: "https://github.com/avajs/ava/pull/1452",
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science, College of Engineering",
  school: "University of Illinois at Urbana-Champaign",
  period: "2000 – 2004",
  honors: "Dean's List, 3.4 GPA",
};

export const community = [
  {
    label: "FIRST LEGO League Robotics Coach",
    organization: "Camels Hump Coders",
    url: "https://camelshumpcoders.org/",
    period: "2023 – Present",
    description:
      "Coaching my son's FLL robotics team for three years, teaching them to code—first in block-based languages, then in Python with Pybricks. The team placed 2nd at the Vermont State Championship in 2025, attended the Sunshine Invitational in Florida, won 1st place at States in 2026, and is headed to the FIRST LEGO League World Championship in Houston in April 2026.",
  },
];

export const skills = [
  "NodeJS",
  "React",
  "JavaScript",
  "Python",
  "D3",
  "Webpack",
  "Docker",
  "Jenkins",
  "Nginx",
  "Ruby",
  "Rails",
  "Django",
  "Clojure",
  "Cassandra",
  "MySQL",
  "Git",
];
