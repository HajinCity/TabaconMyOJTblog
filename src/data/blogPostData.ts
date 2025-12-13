export const getBlogPostById = (id: number) => {
  const posts = [
    {
      id: 1,
      image: "/116.jpg",
      category: "Internship",
      title: "Internship Scouting 2025",
      excerpt:
        "Researched potential Internship Organizations and Company, to prepare for upcoming internship projects and hands-on application development.",
      date: "Dec 01, 2024",
      readTime: "10 min read",
      author: {
        name: "Carlos David A. Tabacon",
        avatar: "/profile.jpg",
        bio: "Junior Full-stack developer with 2 years of experience.",
      },
      content: {
        sections: [
          {
            id: "introduction",
            heading: "Starting the Internship Journey",
            paragraphs: [
              "As I approached my final year, I realized that securing the right internship would be crucial for my professional development. The process of internship scouting isn't just about finding any company—it's about finding the right fit where I can contribute meaningfully while learning from experienced professionals.",
              "I began by researching various organizations that align with my interests in `full-stack development`, `web applications`, and `modern software engineering practices`. This research phase involved analyzing company cultures, technology stacks, and the types of projects they work on.",
            ],
          },
          {
            id: "research-process",
            heading: "The Research Process",
            paragraphs: [
              "My research process involved multiple steps. First, I identified companies that work with technologies I'm passionate about: `React`, `TypeScript`, `Node.js`, and modern cloud platforms. I created a spreadsheet tracking each company's tech stack, company size, internship program details, and application deadlines.",
              "I also reached out to alumni and current interns through LinkedIn to gain insights into their experiences. These conversations provided valuable information about company culture, mentorship quality, and the types of projects interns typically work on.",
            ],
          },
          {
            id: "key-criteria",
            heading: "Key Selection Criteria",
            paragraphs: [
              "When evaluating potential internship opportunities, I focused on several key criteria: `mentorship quality`, `project scope`, `learning opportunities`, and `company growth potential`. I wanted an internship where I could work on real projects that impact users, not just shadow developers or do menial tasks.",
              "Another important factor was the company's commitment to intern development. I looked for organizations that provide structured learning programs, code review sessions, and opportunities to present work to the team.",
            ],
          },
          {
            id: "preparation",
            heading: "Preparing for Applications",
            paragraphs: [
              "Preparation involved updating my portfolio, polishing my resume, and practicing technical interviews. I also worked on several side projects to demonstrate my skills in `React development`, `API integration`, and `responsive design`.",
              "I created a personal blog website (this very site!) to showcase my frontend development skills and attention to detail. This project helped me practice modern React patterns, TypeScript, and component architecture—skills that would be valuable in any internship role.",
            ],
          },
          {
            id: "lessons-learned",
            heading: "Lessons Learned",
            paragraphs: [
              "The scouting process taught me the importance of `proactive networking` and `strategic planning`. Starting early gave me time to research thoroughly and prepare strong applications rather than rushing at the last minute.",
              "I also learned that finding the right internship is a two-way process. While companies evaluate candidates, I should also evaluate whether the opportunity aligns with my career goals and learning objectives.",
            ],
          },
        ],
      },
    },
    {
      id: 2,
      image: "/113.jpg",
      category: "Capstone Project Deployment",
      title: "Capstone Deployment 2025",
      excerpt:
        "Deployed an Online Case Filing System for VAWC, ensuring reliability, security, and usability for community stakeholders.",
      date: "Dec 02, 2022",
      readTime: "8 min read",
      author: {
        name: "Carlos David A. Tabacon",
        avatar: "/profile.jpg",
        bio: "Junior Full-stack developer with 2 years of experience."
      },
      content: {
        sections: [
          {
            id: "introduction",
            heading: "The Capstone Project Journey",
            paragraphs: [
              "After months of development, our team successfully deployed the Online Case Filing System for VAWC (Violence Against Women and Children). This capstone project represents the culmination of our academic journey, combining real-world problem-solving with technical expertise.",
              "The system was designed to help community stakeholders file and manage cases more efficiently, ensuring that critical information is properly documented and accessible to authorized personnel. This project required careful attention to `security`, `usability`, and `reliability`.",
            ],
          },
          {
            id: "development-process",
            heading: "Development and Testing Phase",
            paragraphs: [
              "The development process involved multiple iterations of design, development, and testing. We worked closely with stakeholders to understand their needs and ensure the system would be intuitive for users who may not be highly technical.",
              "Security was a top priority. We implemented `authentication`, `authorization`, and `data encryption` to protect sensitive information. All user inputs were validated, and we conducted thorough security audits before deployment.",
            ],
          },
          {
            id: "deployment-challenges",
            heading: "Deployment Challenges and Solutions",
            paragraphs: [
              "Deployment presented several challenges, from configuring the production environment to ensuring database migrations ran smoothly. We used `cloud hosting services` to ensure scalability and reliability, and implemented `automated backups` to prevent data loss.",
              "One of the biggest challenges was ensuring the system remained accessible during peak usage times. We implemented `load balancing` and `caching strategies` to maintain performance even with multiple concurrent users.",
            ],
          },
          {
            id: "stakeholder-feedback",
            heading: "Stakeholder Training and Feedback",
            paragraphs: [
              "After deployment, we conducted training sessions with community stakeholders to ensure they could effectively use the system. We created user guides and provided ongoing support during the initial rollout period.",
              "The feedback has been overwhelmingly positive. Users appreciate the streamlined process and the system's reliability. This project taught me the importance of `user-centered design` and `iterative improvement` based on real-world usage.",
            ],
          },
          {
            id: "reflection",
            heading: "Reflections and Learnings",
            paragraphs: [
              "This capstone project was more than just an academic requirement—it was an opportunity to create something meaningful that could help real people. The experience reinforced the importance of `collaboration`, `attention to detail`, and `continuous learning` in software development.",
              "Working on a system that handles sensitive information taught me about the responsibility that comes with being a developer. Every line of code, every design decision, and every security measure matters when real people depend on your work.",
            ],
          },
        ],
      },
    },
    {
      id: 3,
      image: "/115.jpg",
      category: "Celebration",
      title: "Sir Philipcris Encarnacion's Birthday",
      excerpt:
        "Shared reflections on teamwork, mentorship, and personal growth while celebrating milestones with peers and colleagues.",
      date: "Dec 02, 2025",
      readTime: "6 min read",
      author: {
        name: "Carlos David A. Tabacon",
        avatar: "/profile.jpg",
        bio: "Junior Full-stack developer with 2 years of experience."
      },
      content: {
        sections: [
          {
            id: "introduction",
            heading: "A Celebration of Mentorship",
            paragraphs: [
              "Today we celebrated Sir Philipcris Encarnacion's birthday, and it was a wonderful opportunity to reflect on the impact that great mentors have on our growth as developers and individuals. These celebrations aren't just about cake and laughter—they're moments to acknowledge the people who guide us on our journey.",
              "Sir Philipcris has been instrumental in my development, not just through technical guidance but through his emphasis on `professional growth`, `teamwork`, and `continuous learning`. His mentorship has shaped how I approach challenges and collaborate with others.",
            ],
          },
          {
            id: "teamwork-reflections",
            heading: "Reflections on Teamwork",
            paragraphs: [
              "During the celebration, I had conversations with peers about our shared experiences working on projects together. We discussed how effective `teamwork` requires more than just dividing tasks—it requires clear communication, mutual respect, and a shared commitment to quality.",
              "One of the key lessons I've learned is that the best teams aren't just groups of skilled individuals, but groups that know how to leverage each other's strengths and support each other's growth. This celebration reminded me of how fortunate I am to be part of such a supportive community.",
            ],
          },
          {
            id: "mentorship-impact",
            heading: "The Impact of Good Mentorship",
            paragraphs: [
              "Good mentors don't just teach you how to code—they teach you how to think, how to solve problems, and how to grow. Sir Philipcris has always encouraged us to think critically, ask questions, and never stop learning.",
              "His approach to mentorship emphasizes `learning from mistakes`, `embracing challenges`, and `helping others succeed`. These values have become integral to how I approach my own work and how I hope to mentor others in the future.",
            ],
          },
          {
            id: "personal-growth",
            heading: "Personal Growth and Milestones",
            paragraphs: [
              "Celebrating milestones with peers and colleagues is a reminder that our journey in tech is not a solo endeavor. Each project, each challenge overcome, and each lesson learned is part of a larger story of growth and development.",
              "These moments of celebration also serve as checkpoints where we can reflect on how far we've come and set intentions for where we want to go. They remind us that `personal growth` and `professional development` go hand in hand.",
            ],
          },
          {
            id: "gratitude",
            heading: "Expressing Gratitude",
            paragraphs: [
              "As we celebrated, I felt immense gratitude for the mentors, peers, and colleagues who have supported my journey. The tech community thrives on `knowledge sharing`, `collaboration`, and `mutual support`, and I'm grateful to be part of it.",
              "Here's to many more years of learning, growing, and celebrating together. Happy birthday, Sir Philipcris, and thank you for being such an inspiring mentor!",
            ],
          },
        ],
      },
    },
    {
      id: 4,
      image: "/4thyear.jpg",
      category: "Internship",
      title: "Internship 1st Duty",
      excerpt:
        "Worked on live development tasks, contributing to system features and gaining practical experience in real-world project workflows.",
      date: "Dec 08, 2025",
      readTime: "10 min read",
      author: {
        name: "Carlos David A. Tabacon",
        avatar: "/profile.jpg",
        bio: "Junior Full-stack developer with 2 years of experience.",
      },
      content: {
        sections: [
          {
            id: "introduction",
            heading: "First Day on Real Projects",
            paragraphs: [
              "Today marked my first official duty day at the internship, and it was both exciting and nerve-wracking. After weeks of onboarding and orientation, I finally got to work on actual development tasks that would be deployed to production.",
              "The transition from academic projects to real-world development is significant. Here, every line of code matters, `code reviews` are thorough, and `testing` is not optional—it's essential. The stakes are higher, but so is the learning opportunity.",
            ],
          },
          {
            id: "first-tasks",
            heading: "My First Development Tasks",
            paragraphs: [
              "I was assigned to work on a feature enhancement for an existing system. The task involved adding new functionality while maintaining backward compatibility and ensuring all existing tests still pass. This required careful `code analysis`, `understanding the codebase architecture`, and `collaborating with senior developers`.",
              "The feature I worked on involved improving the user interface for a reporting module. I had to ensure the changes were `responsive`, `accessible`, and `performant`. Working with a real codebase taught me the importance of understanding existing patterns before making changes.",
            ],
          },
          {
            id: "workflow-experience",
            heading: "Real-World Development Workflows",
            paragraphs: [
              "I learned about the team's development workflow: `feature branches`, `pull requests`, `code reviews`, and `CI/CD pipelines`. Each step in the process serves a purpose, from catching bugs early to ensuring code quality and maintaining a clean git history.",
              "The code review process was particularly enlightening. Senior developers provided constructive feedback that helped me understand not just what to change, but why certain approaches are better. This collaborative process is something I hadn't experienced to this extent in academic projects.",
            ],
          },
          {
            id: "challenges",
            heading: "Challenges and Learning Moments",
            paragraphs: [
              "One of the biggest challenges was navigating a large codebase I wasn't familiar with. I learned to use tools like `grep`, `IDE search functions`, and `code navigation features` to understand how different parts of the system connect.",
              "Another challenge was understanding the business logic behind the features. It's not enough to just write code that works—you need to understand `why` the feature exists and `how` it fits into the larger system. This requires asking questions and reading documentation thoroughly.",
            ],
          },
          {
            id: "team-collaboration",
            heading: "Team Collaboration and Support",
            paragraphs: [
              "The team has been incredibly supportive. When I had questions, they took time to explain concepts and share their knowledge. This collaborative environment makes learning much more effective than trying to figure everything out alone.",
              "I also learned the importance of `clear communication`. When working on tasks, I learned to provide regular updates, ask for help when stuck (but after trying to solve it myself), and document my work clearly for others who might need to understand it later.",
            ],
          },
          {
            id: "reflection",
            heading: "Reflections on Day One",
            paragraphs: [
              "My first duty day reinforced that real-world development is about more than just coding. It's about `understanding requirements`, `working within constraints`, `collaborating effectively`, and `delivering value` to users.",
              "I'm excited about the learning opportunities ahead. Each day working on real projects is a chance to grow, and I'm grateful for the chance to contribute to meaningful work while developing my skills.",
            ],
          },
        ],
      },
    },
    {
      id: 5,
      image: "/117.jpg",
      category: "Internship",
      title: "1st week of internship",
      excerpt:
        "Reflected on onboarding experiences, learning project tools, team collaboration, and foundational software development practices",
      date: "December 12, 2025",
      readTime: "6 min read",
      author: {
        name: "Carlos David A. Tabacon",
        avatar: "/profile.jpg",
        bio: "Junior Full-stack developer with 2 years of experience.",
      },
      content: {
        sections: [
          {
            id: "introduction",
            heading: "Week One: A Foundation for Growth",
            paragraphs: [
              "My first week at the internship has been a whirlwind of learning, adaptation, mistakes and growth. From onboarding sessions to my first code contributions, this week has set the foundation for what I hope will be a transformative experience.",
              "The week was structured to help me understand the company's `development practices`, `project management tools`, and `team dynamics`. Each day brought new insights and opportunities to learn from experienced developers.",
            ],
          },
          {
            id: "onboarding-experience",
            heading: "Onboarding and Setup",
            paragraphs: [
              "The onboarding process was comprehensive. I was introduced to the company's tech stack, development environment setup, and internal tools. Setting up my development environment required configuring `version control`, `IDE settings`, `database connections`, and `API access`.",
              
            ],
          },
          {
            id: "project-tools",
            heading: "Learning Project Tools and Processes",
            paragraphs: [
              "This week I learned about the tools and processes the team uses daily. From `Git workflows` and `branching strategies` to `code review processes` and `deployment pipelines`, each tool serves a specific purpose in maintaining code quality and team efficiency.",
              "I was particularly interested in learning about the team's `testing practices`. They emphasize writing tests alongside code, not after, which ensures that testing is integrated into the development process rather than being an afterthought.",
            ],
          },
          {
            id: "team-collaboration",
            heading: "Team Collaboration and Communication",
            paragraphs: [
              "The team's collaboration style emphasizes `transparency`, `regular communication`, and `knowledge sharing`. Daily stand-ups keep everyone aligned, and the team uses Slack for quick questions and discussions.",
              "I learned the importance of `asking questions` and `seeking feedback` early. The team encouraged me to reach out whenever I needed clarification, which helped me avoid spending too much time stuck on problems I could have solved faster with help.",
            ],
          },
          {
            id: "foundational-practices",
            heading: "Foundational Software Development Practices",
            paragraphs: [
              "This week reinforced the importance of foundational practices like `clean code`, `documentation`, and `version control best practices`. I saw how these practices, when consistently applied, make codebases more maintainable and teams more productive.",
              "I also learned about the team's approach to `code reviews`. Reviews aren't just about finding bugs—they're opportunities for learning, knowledge sharing, and maintaining code quality standards across the team.",
            ],
          },
          {
            id: "first-contributions",
            heading: "My First Contributions",
            paragraphs: [
              "By the end of the week, I had made my first small contributions to the desings and layouts. These were simple tasks, but they gave me confidence and helped me understand the development workflow. Each contribution was reviewed, and the feedback helped me improve.",
              "Working on real tasks, even small ones, made me realize how much I still have to learn. But it also showed me that with the right support and a willingness to learn, I can contribute meaningfully to the team's work.",
            ],
          },
          {
            id: "key-takeaways",
            heading: "Key Takeaways from Week One",
            paragraphs: [
              "The most important lesson from this week is that `learning is continuous` and `asking questions is a strength, not a weakness`. The best developers I've met this week are those who are always learning and aren't afraid to admit when they don't know something.",
              "I also learned that `adaptability` and `communication` are just as important as technical skills. Being able to work effectively in a team, communicate clearly, and adapt to new tools and processes is crucial for success in a professional development environment.",
            ],
          },
          {
            id: "looking-forward",
            heading: "Looking Forward",
            paragraphs: [
              "As I wrap up my first week, I'm excited about the weeks ahead. I know there will be challenges, but I also know that each challenge is an opportunity to grow. The foundation I've built this week will support my continued learning and contribution to the team.",
              "I'm grateful for the supportive team and the opportunity to learn from experienced developers. Here's to many more weeks of growth, learning, and meaningful contributions!",
            ],
          },
        ],
      },
    },
  ];

  return posts.find((post) => post.id === id) || null;
};
