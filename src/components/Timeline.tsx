import React from "react";
import { Calendar, Code, Computer, Star, Trophy, Users } from "lucide-react";

export function Timeline() {
  const timelineData = [
    {
      year: "1st Year",
      period: "2022-2023",
      title: "Foundation & Discovery",
      image: "/redeemer-building.jpg",
      description:
        "Started my journey in Information Technology. Learned programming fundamentals with Java Programming Language. Started my first semester in college.",
      highlights: [
        { icon: Code, text: "First programming course" },
        { icon: Users, text: "Started my first semester in college" },

      ],
    },
    {
      year: "2nd Year",
      period: "2023-2024",
      title: "Building Skills",
      image: "/asdf.jpg",
      description:
        "Deepened my knowledge in data structures and algorithms. Built my first full-stack .NET application using C# Programming Language. Started my second year in college.",
      highlights: [
        { icon: Code, text: "System Developer" },
        { icon: Users, text: "Coven Mothers" },
      ],
    },
    {
      year: "3rd Year",
      period: "2024-2025",
      title: "Capstone Project Proposal",
      image: "/3rdyear.jpg",
      description:
        "Started my third year in college. Proposed Online Case Filing System for Violence Against Women and Their Children (VAWC) as our capstone project.",
      highlights: [
        { icon: Code, text: "3rd Year Capstone Project Proposal" },
        { icon: Users, text: "Hestia" },
      ],
    },
    {
      year: "4th Year",
      period: "2025-2026",
      title: "Capstone Deployment & Internship",
      image: "/4thyear.jpg",
      description: "Completing the final year of BSIT, focusing on capstone deployment, industry internship, and real-world application of technical skills.",
      highlights: [
        { icon: Users, text: "Secured first professional developer role during internship" },
        { icon: Computer, text: "Gained hands-on experience in system deployment and maintenance" },
        { icon: Star, text: "Collaborated with cross-functional teams to deliver project solutions" }
      ]
    },
  ];

  return (
    <section id="timeline" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[#F3F4F7]">
            My <span className="text-[#B5E3FF]">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-[#B5E3FF] mx-auto rounded-full"></div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#B5E3FF]/50 to-[#B5E3FF]/10"></div>

          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="w-5/12">
                  <div className="bg-[#1A1F35] p-6 rounded-lg border border-[#C7CCD9]/20 hover:border-[#B5E3FF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#B5E3FF]/10">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="text-[#B5E3FF]" size={16} />
                      <span className="text-[#B5E3FF] text-sm">{item.period}</span>
                    </div>
                    <h3 className="text-xl text-[#F3F4F7] mb-2">{item.title}</h3>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-lg mb-4 border border-[#C7CCD9]/20"
                    />
                    <p className="text-[#C7CCD9] text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="space-y-2">
                      {item.highlights.map((highlight, idx) => {
                        const Icon = highlight.icon;
                        return (
                          <div key={idx} className="flex items-center gap-2">
                            <Icon className="text-[#B5E3FF]" size={16} />
                            <span className="text-[#C7CCD9] text-sm">
                              {highlight.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Year Badge */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-24 h-24 bg-[#B5E3FF] rounded-full flex items-center justify-center text-[#0D0D12] z-10 border-4 border-[#0D0D12] shadow-lg shadow-[#B5E3FF]/30">
                    <span className="text-sm text-center">{item.year}</span>
                  </div>
                </div>

                {/* Empty space */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Timeline */}
        <div className="lg:hidden space-y-8">
          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-12">
              {/* Vertical line */}
              {index !== timelineData.length - 1 && (
                <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#B5E3FF]/50 to-[#B5E3FF]/10"></div>
              )}

              {/* Year Badge */}
              <div className="absolute left-0 top-0 w-10 h-10 bg-[#B5E3FF] rounded-full flex items-center justify-center text-[#0D0D12] text-xs border-4 border-[#0D0D12] shadow-lg shadow-[#B5E3FF]/30">
                {index + 1}
              </div>

              {/* Content */}
              <div className="bg-[#1A1F35] p-6 rounded-lg border border-[#C7CCD9]/20 hover:border-[#B5E3FF]/50 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="text-[#B5E3FF]" size={16} />
                  <span className="text-[#B5E3FF] text-sm">{item.period}</span>
                </div>
                <h3 className="text-xl text-[#F3F4F7] mb-2">{item.year} - {item.title}</h3>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 border border-[#C7CCD9]/20"
                />
                <p className="text-[#C7CCD9] text-sm mb-4">{item.description}</p>
                <div className="space-y-2">
                  {item.highlights.map((highlight, idx) => {
                    const Icon = highlight.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2">
                        <Icon className="text-[#B5E3FF]" size={16} />
                        <span className="text-[#C7CCD9] text-sm">
                          {highlight.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
