import { getImagePath } from "../utils/imagePath";

export const getBlogPostById = (id: number) => {
  const posts = [
    {
      id: 1,
      image: getImagePath("/116.jpg"),
      category: "Internship",
      title: "Internship Scouting 2025",
      excerpt:
        "Researched potential Internship Organizations and Company, to prepare for upcoming internship projects and hands-on application development.",
      date: "Dec 01, 2024",
      readTime: "10 min read",
      author: {
        name: "Carlos David A. Tabacon",
        avatar: getImagePath("/profile.jpg"),
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
      image: getImagePath("/113.jpg"),
      category: "Capstone Project Deployment",
      title: "Capstone Deployment 2025",
      excerpt:
        "Deployed an Online Case Filing System for VAWC, ensuring reliability, security, and usability for community stakeholders.",
      date: "Dec 02, 2022",
      readTime: "8 min read",
      author: {
        name: "Carlos David A. Tabacon",
        avatar: getImagePath("/profile.jpg"),
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
      image: getImagePath("/115.jpg"),
      category: "Celebration",
      title: "Sir Philipcris Encarnacion's Birthday",
      excerpt:
        "Shared reflections on teamwork, mentorship, and personal growth while celebrating milestones with peers and colleagues.",
      date: "Dec 02, 2025",
      readTime: "6 min read",
      author: {
        name: "Carlos David A. Tabacon",
        avatar: getImagePath("/profile.jpg"),
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
      image: getImagePath("/4thyear.jpg"),
      category: "Internship",
      title: "Internship 1st Duty",
      excerpt:
        "Worked on live development tasks, contributing to system features and gaining practical experience in real-world project workflows.",
      date: "Dec 08, 2025",
      readTime: "10 min read",
      author: {
        name: "Carlos David A. Tabacon",
        avatar: getImagePath("/profile.jpg"),
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
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "1st week of internship",
      excerpt:
        "Reflected on onboarding experiences, learning project tools, team collaboration, an  d foundational software development practices",
      date: "December 08 to 12, 2025",
      readTime: "6 min read",
      author: {
        name: "Carlos David A. Tabacon",
        avatar: getImagePath("/profile.jpg"),
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
    {
      id: 6,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "2nd week of internship",
      excerpt:
      "Completed an E-Challenge, improved sales skills, and collaborated on updating the system’s knowledge base.",
      date: "December 15 to 22, 2025",
      readTime: "6 min read",
      author: {
        name: "Carlos David A. Tabacon",
        avatar: getImagePath("/profile.jpg"),
        bio: "Junior Full-stack developer with 2 years of experience.",
      },
      content: {
        sections: [
          {
            id: "introduction",
            heading: "Week Two: Applying Knowledge and Building Confidence",
            paragraphs: [
              "My second week of internship marked a transition from observation to active participation. I was given opportunities to apply what I had learned during my first week, allowing me to better understand the system and my role within the team.",
              "Through activities such as the E-Challenge, sales training, and updating the system’s knowledge base, I was able to strengthen both my technical understanding and communication skills. This week pushed me to think critically, be creative, and take on responsibilities that contributed to my overall growth as an intern.",
            ],
          },
         {
            id: "onboarding-experience",
            heading: "Onboarding and Setup",
            paragraphs: [
              "During my second week, I became more familiar with the tools and platforms used in our daily tasks. I was introduced to applications such as `OBS` for screen recording, `Google Meet` for communication, and `WordPress` for managing and publishing content.",
              "I also utilized tools like `MS Word`, `PowerPoint`, and `Excel` to create documents, presentations, and organize data. These tools helped me prepare for the E-Challenge video presentation and update the system’s knowledge base efficiently.",
            ],
          },
          {
            id: "project-tools",
            heading: "Learning Project Tools and Processes",
            paragraphs: [
              "This week, I gained hands-on experience with the tools used for both communication and content creation. Using `OBS`, I was able to record and produce our video presentation for the E-Challenge, while `Google Meet` supported collaboration and discussions with the team.",
              "I also worked with `WordPress` to understand how content is managed and presented online, and used `MS Word`, `PowerPoint`, and `Excel` to document, present, and organize information. Additionally, I utilized AI tools like ChatGPT to help me generate clearer explanations, organize ideas, and make my outputs more understandable. These tools played an important role in helping me complete tasks effectively and improve my overall workflow.",
            ],
          },
          {
            id: "team-collaboration",
            heading: "Team Collaboration and Communication",
            paragraphs: [
              "During this week, collaboration became an important part of my learning experience. Together with my teammates, especially Aldrin and Connery, we worked closely to update and improve the system’s knowledge base using `WordPress`. We supported each other in understanding the system better, sharing insights and clarifying concepts whenever needed.",
              "This experience taught me the value of teamwork, open communication, and knowledge sharing. By helping one another and working towards a common goal, we were able to complete tasks more efficiently and strengthen our understanding of the system.",
            ],
          },
         {
            id: "foundational-practices",
            heading: "Foundational Software Development Practices",
            paragraphs: [
              "This week reinforced the importance of foundational practices such as `documentation`, `clarity`, and continuous improvement. While working on the knowledge base, I focused on proofreading and refining content to ensure it was clear, accurate, and easy to understand.",
              "I also utilized different tools and resources to improve my outputs, which helped me enhance my writing and presentation skills. This experience showed me that strong foundational practices are essential not only in coding but also in creating effective and reliable documentation.",
            ],
          },
         {
            id: "first-contributions",
            heading: "My Contributions this Week",
            paragraphs: [
              "During this week, I made meaningful contributions by creating new knowledge base instruction guides and assisting in updating existing content. I also played a role in developing our video presentation for the E-Challenge, which allowed me to apply both my technical understanding and creativity.",
              "In addition, I helped my fellow OJT students better understand the system by sharing what I had learned. These contributions, although simple, boosted my confidence and showed me that I can actively support both the team and the overall development process.",
            ],
          },
         {
            id: "key-takeaways",
            heading: "Key Takeaways from Week Two",
            paragraphs: [
              "The most important lesson I learned this week is that `understanding a system deeply requires both study and application`. Through the E-Challenge, knowledge base updates, and collaboration with my teammates, I realized that explaining a system to others helps strengthen my own understanding.",
              "I also learned that `teamwork`, `communication`, and `creativity` are essential in completing tasks effectively. Working with my team, using different tools, and continuously improving my outputs showed me that growth comes from both individual effort and collaboration.",
            ],
          },
          {
            id: "looking-forward",
            heading: "Looking Forward",
            paragraphs: [
              "As I complete my second week, I feel more confident in my ability to contribute and communicate within the team. I look forward to taking on more challenging tasks that will further enhance my technical and professional skills.",
              "With the experiences I gained this week, I am motivated to continue learning, improving, and becoming more effective in both understanding systems and contributing to the team’s goals.",
            ],
          },
        ],
      },
    },
    {
      id: 7,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "3rd week of internship",
      excerpt:
         "Strengthened communication skills through sales activities and improved confidence in presenting the system.",
      date: "January 5 to 9, 2026",
      readTime: "6 min read",
      author: {
        name: "Carlos David A. Tabacon",
        avatar: getImagePath("/profile.jpg"),
        bio: "Junior Full-stack developer with 2 years of experience.",
      },
      content: {
        sections: [
         {
            id: "introduction",
            heading: "Week Three: Building Communication and Sales Skills",
            paragraphs: [
              "My third week of internship focused on strengthening my communication and sales abilities. As I continued my role as a Sales Representative, I became more comfortable engaging with clients and understanding how to present the system effectively.",
              "This week allowed me to develop confidence in explaining the system, handling inquiries, and adapting my approach based on different client needs. It was a valuable experience that helped me grow both professionally and personally.",
            ],
          },
          {
            id: "onboarding-experience",
            heading: "Onboarding and Setup",
            paragraphs: [
              "By my third week of internship, I had become more familiar with the company’s workflow and expectations. My tasks were more focused on communication and sales-related activities, which helped me better understand how the system is introduced and explained to potential clients.",
              "This week also helped me adjust more confidently to my responsibilities. As I continued participating in discussions and presentations, I became more comfortable with the tools, processes, and professional environment surrounding my role.",
            ],
          },
          {
            id: "project-tools",
            heading: "Learning Tools and Sales Processes",
            paragraphs: [
              "During this week, I continued using tools such as `Google Meet` for communication and `MS PowerPoint` for presenting the system to clients. These tools helped me deliver clearer and more structured presentations.",
              "I also practiced using communication strategies and sales techniques, which improved my ability to explain the system’s features and benefits in a more understandable and convincing way.",
            ],
          },
          {
            id: "team-collaboration",
            heading: "Team Collaboration and Communication",
            paragraphs: [
              "Collaboration with my team remained important during this week. We supported each other in improving our sales approaches by sharing techniques, giving feedback, and helping one another understand how to better communicate the system.",
              "Through this teamwork, I learned that exchanging ideas and experiences can greatly improve performance and confidence when dealing with clients.",
            ],
          },
         {
            id: "foundational-practices",
            heading: "Foundational Software Development Practices",
            paragraphs: [
              "Although my main focus this week was on sales and communication, I still learned important foundational practices such as `clear explanation`, `professional communication`, and `organized presentation of information`. These skills are essential in helping others understand a system effectively.",
              "I realized that having a strong foundation does not only apply to coding, but also to how ideas are delivered and presented. Being clear, prepared, and confident in communication is an important practice that contributes to both personal growth and professional success.",
            ],
          },
          {
            id: "first-contributions",
            heading: "My Contributions",
            paragraphs: [
              "During this week, my main contributions were focused on presenting the system and assisting in sales-related activities. I actively participated in discussions and helped explain system features to improve client understanding.",
              "These experiences helped me build confidence and showed me the importance of clear communication in promoting a system effectively.",
            ],
          },
          {
            id: "key-takeaways",
            heading: "Key Takeaways from Week Three",
            paragraphs: [
              "This week taught me that `communication` and `confidence` are essential in presenting ideas and systems effectively. Being able to explain clearly and adapt to different situations is a valuable skill in any field.",
              "I also learned that `practice` and `team support` play a big role in improving performance, especially in tasks that involve interacting with others.",
            ],
          },
        {
            id: "looking-forward",
            heading: "Looking Forward",
            paragraphs: [
              "As I move forward, I aim to continue improving my communication skills and become more confident in handling real-world interactions.",
              "I am excited to learn more and take on new responsibilities that will further develop both my technical and professional abilities.",
            ],
          },
        ],
      },
    },
    {
      id: 8,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "4th week of internship",
      excerpt:
        "Reflected on onboarding experiences, learning project tools, team collaboration, and foundational software development practices",
      date: "January 12 to 16, 2026",
      readTime: "6 min read",
      author: {
        name: "Carlos David A. Tabacon",
        avatar: getImagePath("/profile.jpg"),
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
    {
      id: 9,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "5th week of internship",
      excerpt:
        "Reflected on onboarding experiences, learning project tools, team collaboration, and foundational software development practices",
      date: "January 19 to 23, 2026",
      readTime: "6 min read",
      author: {
        name: "Carlos David A. Tabacon",
        avatar: getImagePath("/profile.jpg"),
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
    {
      id: 10,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "6th week of internship",
      excerpt:
        "Reflected on onboarding experiences, learning project tools, team collaboration, and foundational software development practices",
      date: "January 26 to 30, 2026",
      readTime: "6 min read",
      author: {
        name: "Carlos David A. Tabacon",
        avatar: getImagePath("/profile.jpg"),
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
    {
      id: 11,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "7th week of internship",
      excerpt:
        "Reflected on onboarding experiences, learning project tools, team collaboration, and foundational software development practices",
      date: "February 2 to 6, 2026",
      readTime: "6 min read",
      author: {
        name: "Carlos David A. Tabacon",
        avatar: getImagePath("/profile.jpg"),
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
    {
      id: 12,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "8th week of internship",
      excerpt:
        "Reflected on onboarding experiences, learning project tools, team collaboration, and foundational software development practices",
      date: "February 9 to 13, 2026",
      readTime: "6 min read",
      author: {
        name: "Carlos David A. Tabacon",
        avatar: getImagePath("/profile.jpg"),
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
    {
      id: 13,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "9th week of internship",
      excerpt:
        "Reflected on onboarding experiences, learning project tools, team collaboration, and foundational software development practices",
      date: "February 16 to 20, 2026",
      readTime: "6 min read",
      author: {
        name: "Carlos David A. Tabacon",
        avatar: getImagePath("/profile.jpg"),
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
    {
      id: 13,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "10th week of internship",
      excerpt:
        "Reflected on onboarding experiences, learning project tools, team collaboration, and foundational software development practices",
      date: "February 23 to 27, 2026",
      readTime: "6 min read",
      author: {
        name: "Carlos David A. Tabacon",
        avatar: getImagePath("/profile.jpg"),
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
    {
      id: 14,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "11th week of internship",
      excerpt:
        "Reflected on onboarding experiences, learning project tools, team collaboration, and foundational software development practices",
      date: "March 2 to 6, 2026",
      readTime: "6 min read",
      author: {
        name: "Carlos David A. Tabacon",
        avatar: getImagePath("/profile.jpg"),
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
    {
      id: 15,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "12th week of internship",
      excerpt:
        "Reflected on onboarding experiences, learning project tools, team collaboration, and foundational software development practices",
      date: "March 9 to 13, 2026",
      readTime: "6 min read",
      author: {
        name: "Carlos David A. Tabacon",
        avatar: getImagePath("/profile.jpg"),
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
    {
      id: 16,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "13th week of internship",
      excerpt:
        "Reflected on onboarding experiences, learning project tools, team collaboration, and foundational software development practices",
      date: "March 16 to 20, 2026",
      readTime: "6 min read",
      author: {
        name: "Carlos David A. Tabacon",
        avatar: getImagePath("/profile.jpg"),
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
    {
      id: 17,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "13th week of internship",
      excerpt:
        "Reflected on onboarding experiences, learning project tools, team collaboration, and foundational software development practices",
      date: "March 20, 2026",
      readTime: "6 min read",
      author: {
        name: "Carlos David A. Tabacon",
        avatar: getImagePath("/profile.jpg"),
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
