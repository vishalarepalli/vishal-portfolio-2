/**
 * STRICT SOURCE OF TRUTH: RESUME OF VISHAL AREPALLI
 * No invented facts, no exaggerated claims, no unlisted projects or skills.
 */

export interface IntroSubtitle {
  startTime: number; // in seconds
  endTime: number;   // in seconds
  text: string;
}

export const INTRODUCTION_SCRIPT =
  "Hello and welcome. I am Vishal Arepalli, an aspiring software developer pursuing my Bachelor of Technology in Computer Science Engineering at DVR and Dr. HS MIC College of Technology. " +
  "I have a solid foundation in Python, C, Java, HTML, CSS, JavaScript, and MySQL with DBMS concepts. " +
  "My projects include an interactive MySQL terminal-based personal portfolio, a full-stack MERN audio player and manager, and a cross-platform Flutter fitness tracker. " +
  "I have earned certifications in the Industrial Internet of Things from NPTEL, Python Full Stack from Edu Skills, and completed an internship on Generative AI with ServiceNow University. " +
  "Driven by problem-solving, adaptability, and continuous learning, I am eager to build practical software solutions and create real value. Thank you for visiting my portfolio.";

export const INTRODUCTION_SUBTITLES: IntroSubtitle[] = [
  {
    startTime: 0.0,
    endTime: 4.8,
    text: "Hello and welcome. I am Vishal Arepalli, an aspiring software developer.",
  },
  {
    startTime: 4.8,
    endTime: 12.2,
    text: "Pursuing my Bachelor of Technology in Computer Science Engineering at DVR & Dr. HS MIC College of Technology.",
  },
  {
    startTime: 12.2,
    endTime: 19.8,
    text: "I have a solid foundation in Python, C, Java, HTML, CSS, JavaScript, and MySQL with DBMS concepts.",
  },
  {
    startTime: 19.8,
    endTime: 27.5,
    text: "My projects include an interactive MySQL terminal-based personal portfolio,",
  },
  {
    startTime: 27.5,
    endTime: 34.6,
    text: "A full-stack MERN audio player and manager,",
  },
  {
    startTime: 34.6,
    endTime: 39.8,
    text: "And a cross-platform Flutter fitness tracker.",
  },
  {
    startTime: 39.8,
    endTime: 47.6,
    text: "I have earned certifications in Industrial IoT from NPTEL, Python Full Stack from Edu Skills, and Generative AI with ServiceNow University.",
  },
  {
    startTime: 47.6,
    endTime: 54.5,
    text: "Driven by problem-solving, adaptability, and continuous learning, I am eager to build practical software solutions.",
  },
  {
    startTime: 54.5,
    endTime: 59.2,
    text: "Thank you for visiting my portfolio.",
  },
];

export const VISHAL_FACTS = {
  name: "VISHAL AREPALLI",
  displayName: "Vishal Arepalli",
  email: "vishalarepalli246@gmail.com",
  phone: "+91 9666246114",
  location: "Andhra Pradesh, India",
  careerObjective:
    "Aspiring Software Developer with a foundation in Python, Java, and web technologies, interested in building practical software solutions and solving technical problems. Eager to apply programming skills, contribute to development teams, and grow through continuous learning and hands-on experience.",
  education: [
    {
      institution: "DVR & DR. HS MIC COLLEGE OF TECHNOLOGY, Kanchikacherla",
      degree: "Bachelor of Technology: Computer Science Engineering",
      score: "Percentage: 7.6/10",
      years: "2023 to 2027",
      status: "Currently Pursuing",
    },
    {
      institution: "NARAYANA JUNIOR COLLEGE, Vijayawada",
      degree: "Intermediate: Board of Intermediate, Andhra Pradesh",
      score: "Percentage: 82.2%",
      years: "2021 to 2023",
      status: "Completed",
    },
    {
      institution: "NARAYANA TECHNO SCHOOL, Vijayawada",
      degree: "SSC: Board of Secondary Education, Andhra Pradesh",
      score: "Aggregate: 95%",
      years: "2021",
      status: "Completed",
    },
  ],
  projects: [
    {
      id: "mysql-terminal-portfolio",
      title: "MySQL Terminal-Based Personal Portfolio",
      category: "Interactive CLI & Database Experience",
      tech: ["MySQL", "Command-Line Interface", "GitHub Pages"],
      summary:
        "Developed an interactive, terminal-inspired portfolio website to showcase technical skills, projects, certifications, and educational background.",
      details: [
        "Developed an interactive, terminal-inspired portfolio website to showcase technical skills, projects, certifications, and educational background.",
        "Designed a command-line-style interface and deployed the website using GitHub Pages for easy accessibility.",
      ],
      icon: "terminal",
      commandExample: "SELECT * FROM projects WHERE developer = 'Vishal';",
    },
    {
      id: "mern-audio-player",
      title: "Audio player and manager – MERN stack",
      category: "Full-Stack Web Application",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "RESTful APIs"],
      summary:
        "Developed a full-stack audio player application with features like audio streaming, playlist management, and user interaction.",
      details: [
        "Developed a full-stack audio player application using MongoDB, Express.js, React, and Node.js with features like audio streaming, playlist management, and user interaction.",
        "Implemented RESTful APIs and responsive UI to ensure smooth playback experience and efficient data handling across frontend and backend.",
      ],
      icon: "audio",
      highlightFeatures: ["Audio Streaming", "Playlist Management", "User Interaction", "RESTful APIs", "Responsive UI"],
    },
    {
      id: "flutter-fitness-tracker",
      title: "Fitness Tracker- Flutter",
      category: "Cross-Platform Mobile Application",
      tech: ["Flutter", "Dart", "Real-Time Data"],
      summary:
        "Built a cross-platform fitness tracking application using Flutter with features like activity monitoring, step counting, and workout tracking.",
      details: [
        "Built a cross-platform fitness tracking application using Flutter with features like activity monitoring, step counting, and workout tracking.",
        "Designed an intuitive and responsive UI and integrated real-time data updates to enhance user engagement and performance tracking.",
      ],
      icon: "fitness",
      highlightFeatures: ["Activity Monitoring", "Step Counting", "Workout Tracking", "Intuitive Responsive UI", "Real-Time Updates"],
    },
  ],
  skills: {
    programmingLanguages: [
      { name: "Python", level: "Core" },
      { name: "C", level: "Core" },
      { name: "Java", level: "Basic Knowledge" },
    ],
    webTechnologies: [
      { name: "HTML", level: "Web Foundation" },
      { name: "CSS", level: "Styling & Layout" },
      { name: "JS", level: "Frontend Logic" },
    ],
    database: [
      { name: "MYSQL", level: "Relational DB" },
    ],
    concepts: [
      { name: "DBMS", level: "Core Architecture" },
    ],
  },
  certifications: [
    {
      title: "Industrial internet of things-NPTEL",
      issuer: "NPTEL",
      type: "Course Certification",
    },
    {
      title: "Python full stack-Edu Skills",
      issuer: "Edu Skills",
      type: "Full Stack Certification",
    },
    {
      title: "Internship on Generative AI-Service now University",
      issuer: "ServiceNow University",
      type: "Internship Program",
    },
  ],
  strengths: [
    { title: "Problem-Solving", desc: "Approaching challenges with analytical clarity and structured execution." },
    { title: "Adaptability", desc: "Quickly learning new paradigms, frameworks, and engineering environments." },
    { title: "Continuous Learning", desc: "Committed to ongoing hands-on skill development and practical growth." },
  ],
  hobbies: [
    { title: "Video editing and Freelancing", icon: "video" },
    { title: "Singing and posting on Instagram", icon: "mic" },
    { title: "Playing Badminton", icon: "activity" },
  ],
};
