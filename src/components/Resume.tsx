import React from "react";
import { Download, Briefcase, GraduationCap } from "lucide-react";
import { getImagePath } from "../utils/imagePath";

export function Resume() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = getImagePath("/Carlos David Tabacon.pdf");
    link.download = 'Carlos David Tabacon.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experiences = [
    {
      title: "WordPress Developer & Sales Intern",
      company: "ActiVerse Incorporation",
      period: "2025 – Present",
      description:
        "An Intern assisting in developing and maintaining WordPress websites while supporting sales initiatives. Gaining hands-on experience in web development, client management, and digital marketing.",
    },
    {
      title: "System Developer",
      company: "Accounts Payable Management System (APMS)",
      period: "2025 – Present",
      description:
        "Developing and maintaining the APMS to streamline financial workflows, automate invoice processing, and improve accuracy and efficiency in accounts payable operations.",
    },
    {
      title: "Game Tester",
      company: "Moon Valley",
      period: "2025 – Present",
      description:
        "Test gameplay and record MP4 videos for AI training. Identify and document issues to improve the overall gaming platform experience.",
    },
    {
      title: "System Developer & Co-founder",
      company: "Hestia",
      period: "2024 – Present",
      description:
        "Co-founded and developed desktop and mobile applications for an online case filing and management system addressing cases of Violence Against Women and Their Children (VAWC). Implemented and the improvment on the project 2023 features to streamline case tracking, reporting, and user accessibility, enhancing overall efficiency and support for victims.",
    },
    {
      title: "System Developer & Co-founder",
      company: "Tuluyan Application",
      period: "2023 – Present",
      description:
        "Co-founded and developed a mobile application that streamlines booking and management of bed spaces, rooms for rent, apartments, and boarding houses. Designed and implemented core features to enhance user experience and improve operational efficiency.",
    },
    {
      title: "System Developer",
      company: "Coven Mothers",
      period: "February 2023 – April 2023",
      description:
        "Developed a Case Recording and Management System for a community project addressing Violence Against Women and Their Children (VAWC), improving case tracking, documentation, and overall management efficiency.",
    },
    {
      title: "System Developer",
      company: "3 Degree Coffee Shop POS",
      period: "August 2022 – December 2022",
      description:
        "Developed and maintained a Point-of-Sale (POS) system for a coffee shop, implementing features for sales tracking, inventory management, and reporting to improve operational efficiency.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Information Technology (BSIT)",
      school: "Saint Columban College",
      period: "2022 – Present",
      description:
        "Currently completing the program and undergoing On-the-Job Training (OJT).",
    },
    {
      degree: "Bachelor of Science in Marine Transportation",
      school: "Our Lady of Triumph Institute of Technology - Pagadian Campus",
      period: "2021 – 2022",
      description:
        "Completed one year of the BS Marine Transportation program, earning 48 academic units.",
    },
    {
      degree: "Senior High School",
      school: "Zamboanga del Sur National High School – Senior High School Department",
      period: "2019 – 2021",
      description:
        "Completed the Senior High School program, gaining academic preparation and essential skills for higher education or employment.",
    },
    {
      degree: "Junior High School",
      school: "Zamboanga del Sur National High School – Junior High School Department",
      period: "2015 – 2019",
      description:
        "Completed the four-year Junior High School program with honors, providing a strong academic foundation and preparation for senior high school.",
    },
    {
      degree: "Elementary Education",
      school: "Balangasan Central Elementary School",
      period: "2008 – 2015",
      description:
        "Completed elementary education with honors, demonstrating a strong foundation in core academic and integrated subjects.",
    },
  ];

  const skills = [
    { name: "Project Management", level: 90 },
    { name: "Problem Solving & Critical Thinking", level: 95 },
    { name: "Creativity & Innovation", level: 85 },
    { name: "Leadership & Teamwork", level: 80 },
    { name: "Communication & Presentation", level: 85 },
    { name: "Time Management", level: 80 },
    { name: "C Sharp", level: 75 },
    { name: "Relational Database Management System", level: 90 },
    { name: "UI/UX Design", level: 70 },
    { name: "Mobile Application Development", level: 70 },
    { name: "Web Application Development", level: 70 },
    { name: "Desktop Application Development", level: 70 },
    { name: "Network Administration", level: 70 },
    { name: "System Administration", level: 70 },
    { name: "System Security", level: 70 },
    { name: "System Maintenance", level: 70 },
  ];

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1F35]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[#F3F4F7]">
            Resume & <span className="text-[#B5E3FF]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-[#B5E3FF] mx-auto rounded-full mb-6"></div>
          <button 
            onClick={handleDownloadCV}
            className="px-6 py-3 bg-[#B5E3FF] text-[#0D0D12] rounded-lg hover:bg-[#B5E3FF]/90 transition-all duration-300 flex items-center gap-2 mx-auto cursor-pointer"
          >
            <Download size={20} />
            Download CV
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#B5E3FF]/10 rounded-lg flex items-center justify-center">
                <Briefcase className="text-[#B5E3FF]" size={20} />
              </div>
              <h3 className="text-2xl text-[#F3F4F7]">Experience</h3>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-[#C7CCD9]/20 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#B5E3FF] rounded-full border-4 border-[#0D0D12]"></div>

                  <div className="bg-[#1A1F35] p-6 rounded-lg border border-[#C7CCD9]/20 hover:border-[#B5E3FF]/50 transition-all duration-300">
                    <p className="text-[#B5E3FF] text-sm mb-2">{exp.period}</p>
                    <h4 className="text-[#F3F4F7] mb-1">{exp.title}</h4>
                    <p className="text-[#C7CCD9] text-sm mb-3">{exp.company}</p>
                    <p className="text-[#C7CCD9] text-sm">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#B5E3FF]/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="text-[#B5E3FF]" size={20} />
              </div>
              <h3 className="text-2xl text-[#F3F4F7]">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-[#C7CCD9]/20 last:pb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#B5E3FF] rounded-full border-4 border-[#0D0D12]"></div>

                  <div className="bg-[#1A1F35] p-6 rounded-lg border border-[#C7CCD9]/20 hover:border-[#B5E3FF]/50 transition-all duration-300">
                    <p className="text-[#B5E3FF] text-sm mb-2">{edu.period}</p>
                    <h4 className="text-[#F3F4F7] mb-1">{edu.degree}</h4>
                    <p className="text-[#C7CCD9] text-sm mb-3">{edu.school}</p>
                    <p className="text-[#C7CCD9] text-sm">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div>
          <h3 className="text-2xl text-[#F3F4F7] mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-[#F3F4F7]">{skill.name}</span>
                  <span className="text-[#B5E3FF]">{skill.level}%</span>
                </div>
                <div className="h-2 bg-[#1A1F35] rounded-full overflow-hidden border border-[#C7CCD9]/20">
                  <div
                    className="h-full bg-gradient-to-r from-[#B5E3FF] to-[#B5E3FF]/70 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
