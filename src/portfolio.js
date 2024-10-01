/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dhruv Bhanderi",
  title: "Heyy, I'm Dhruv",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1JPiUdoTwses7-89eUksZgH1sHhNIIUK3/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dhruv7539",
  linkedin: "https://www.linkedin.com/in/dhruvbhanderi7/",
  gmail: "dhruvbhanderi7@gmail.com",
  medium: "https://medium.com/@dhruvbhanderi7",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section


const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University Of Southern California",
      logo: require("./assets/images/USClogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2024 - May 2026",
      desc: "",
      descBullets: [
        "Analysis Of Algorithm",
        "Information Retrieval And Web Search Engine"
      ]
    },
    {
      schoolName: "Pandit Deendayal Energy University",
      logo: require("./assets/images/PDPUlogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "November 2020 - May 2024",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Published a Research Paper in IEEE Conference"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Engineer",
      company: "SPIGOT Developers",
      companylogo: require("./assets/images/SPIGOTlogo.png"),
      date: "Jan 2024 – Jul 2024",
      desc: "Experienced in leading migration projects, optimizing cloud infrastructure, and enhancing front-end performance. Successfully migrated payment processing to in-house microservices (Node.js, Docker), reducing licensing costs by 20%. Revamped React.js components using TDD, improving load times by 15% and trimming bundle size by 1.2 MB. Optimized AWS infrastructure (EC2, S3), cutting costs by 15% while ensuring performance and scalability. Skilled in collaborating with product managers and maintaining regulatory compliance.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Full Stack Developer Intern",
      company: "SPIGOT Developers",
      companylogo: require("./assets/images/SPIGOTlogo.png"),
      date: "May 2023 – Aug 2023",
      desc: "Developed and led the creation of a portfolio website using Flask, improving team efficiency by 20%. Integrated AJAX for dynamic content loading and RESTful APIs. Leveraged Google Analytics and SEO strategies, resulting in a 25% increase in user engagement and a 15% rise in lead conversions, significantly enhancing market reach and profitability."
    },
    {
      role: "Web developer Intern",
      company: "Aasma Technology",
      companylogo: require("./assets/images/AasmaLogo.png"),
      date: "Jan 2023 – Apr 2023",
      desc: "Developed responsive web apps using React.js with Jest for testing, boosting user engagement by 20%. Optimized Node.js backend with OAuth2 authentication, reducing server response times by 10% and enhancing API efficiency. Spearheaded Agile practices, accelerating project delivery by 20%."
    }
  ]
};
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/AnnenbergLogo.png"),
      projectName: "USC Annenberg Media",
      projectDesc: "Working on improving USC Annenberg Website",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.uscannenbergmedia.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "IBM Full Stack Software Developer",
      subtitle:
        "Successfully completed the IBM Full Stack Software Developer Professional Certificate, demonstrating proficiency in cloud-native application development and cutting-edge technologies such as React, Node.js, Docker, and Kubernetes.",
      image: require("./assets/images/IBMlogo.png"),
      imageAlt: "IBM Full Stack Software Developer",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/62463eec967153b9a6b66ff733ec10f0"
        },
        
      ]
    },
    {
      title: "Foundations: Data, Data, Everywhere",
      subtitle:
        "Completed Google's 'Foundations: Data, Data, Everywhere' course, gaining a solid understanding of foundational data concepts and their application in data-driven decision-making.",
      image: require("./assets/images/GoogleLogo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/5e89c2a1f841612b8646283e6d818059"
        }
      ]
    },

    {
      title: "IBM Full-Stack JavaScript Developer",
      subtitle: "Completed Certifcation from IBM for IBM Full-Stack JavaScript Developer",
      image: require("./assets/images/IBMlogo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://coursera.org/share/2f8b8f7d8580b7c25ea3425453671070"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+2137258988",
  email_address: "dhruvbhanderi7@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
