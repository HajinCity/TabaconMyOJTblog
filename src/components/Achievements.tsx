import React from "react";
import { Award, Trophy, Star, Target, Zap, Medal } from "lucide-react";

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: "2nd Best in Capstone Research",
      category: "Research Festival 2025",
      year: "2025",
      description: "Developed an Online Case Filing System for Violence Against Women and Children (VAWC), recognized for innovation and practical application. Also received Best in Booth Setup and People's Choice Award for presentation and engagement."
    },    
    
    {
      icon: Award,
      title: "4th Runner-Up, DICT Regional Pitching",
      category: "Innovation",
      year: "2025",
      description:
        "Presented the Online Case Filing System for Violence Against Women and Children (VAWC), recognized for innovation, practicality, and impact in addressing community needs.",
    },
    {
      icon: Award,
      title: "Saint Columban College Representative of Zam-Basulta Pitching Presentation",
      category: "Innovation",
      year: "2025",
      description:
        "Represented Saint Columban College in the Zam-Basulta Pitching Presentation, showcasing innovative project ideas and solutions.",
    },
    {
      icon: Star,
      title: "Dean's List",
      category: "Academic Achievement",
      year: "2022-2025",
      description:
        "Maintained GPA above 1.2 - 1.78 for three consecutive years, earning Dean's List honors.",
    },
   
    
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1F35]/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[#F3F4F7]">
            Achievements & <span className="text-[#B5E3FF]">Awards</span>
          </h2>
          <div className="w-20 h-1 bg-[#B5E3FF] mx-auto rounded-full"></div>
        </div>

        {/* Masonry Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="bg-[#1A1F35] p-6 rounded-lg border border-[#C7CCD9]/20 hover:border-[#B5E3FF]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#B5E3FF]/10 hover:-translate-y-1 group"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-[#B5E3FF]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#B5E3FF]/20 transition-colors">
                  <Icon className="text-[#B5E3FF]" size={28} />
                </div>

                {/* Category & Year */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#B5E3FF] text-xs px-2 py-1 bg-[#B5E3FF]/10 rounded">
                    {achievement.category}
                  </span>
                  <span className="text-[#C7CCD9] text-xs">
                    {achievement.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[#F3F4F7] text-lg mb-3">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-[#C7CCD9] text-sm">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
