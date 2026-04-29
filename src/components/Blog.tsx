import React from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { getImagePath } from "../utils/imagePath";

interface BlogProps {
  onPostClick?: (postId: number) => void;
}

export function Blog({ onPostClick }: BlogProps) {
  const blogPosts = [
    {
      id: 1,
      image: getImagePath("/116.jpg"),
      category: "Internship",
      title: "Internship Scouting 2025",
      excerpt:
        "Researched potential Internship Organizations and Company, to prepare for upcoming internship projects and hands-on application development.",
      date: "Dec 01, 2025",
      readTime: "10 min read",
    },
    {
      id: 2,
      image: getImagePath("/113.jpg"),
      category: "Capstone Project Deployment",
      title: "Capstone Deployment 2025",
      excerpt:
        "Deployed an Online Case Filing System for VAWC, ensuring reliability, security, and usability for community stakeholders.",
      date: "Dec 02, 2025",
      readTime: "8 min read",
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
    },
    {
      id: 5,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "1st week of internship",
      excerpt:
        "Reflected on onboarding experiences, learning project tools, team collaboration, and foundational software development practices",
      date: "December 08 to 12, 2025",
      readTime: "6 min read",
    },
    {
      id: 6,
      image: getImagePath("/ojt8.jpg"),
      category: "Internship",
      title: "2nd week of internship",
      excerpt:
        "Completed an E-Challenge, improved sales skills, and collaborated on updating the system’s knowledge base.",
      date: "December 15 to 22, 2025",
      readTime: "6 min read",
    },
    {
      id: 7,
      image: getImagePath("/ojt7.jpg"),
      category: "Internship",
      title: "3rd week of internship",
      excerpt:
        "Strengthened communication skills through sales activities and improved confidence in presenting the system.",
      date: "January 5 to 9, 2026",
      readTime: "6 min read",
    },
    {
      id: 8,
      image: getImagePath("/ojt17.jpg"),
      category: "Internship",
      title: "4th week of internship",
      excerpt:
        "Transitioned into a developer role and began studying MVC, ASP.NET, and API development.",
      date: "January 12 to 16, 2026",
      readTime: "6 min read",
    },
    {
      id: 9,
      image: getImagePath("/ojt3.jpg"),
      category: "Internship",
      title: "5th week of internship",
      excerpt:
        "Continued studying MVC, ASP.NET, and API while strengthening programming fundamentals.",
      date: "January 19 to 23, 2026",
      readTime: "6 min read",
    },
    {
      id: 10,
      image: getImagePath("/ojt4.jpg"),
      category: "Internship",
      title: "6th week of internship",
      excerpt:
        "Experienced a corporate work environment in Makati and gained insights into professional industry practices.",
      date: "January 26 to 30, 2026",
      readTime: "6 min read",
    },
    {
      id: 11,
      image: getImagePath("/ojt6.jpg"),
      category: "Internship",
      title: "7th week of internship",
      excerpt:
        "Started contributing to the company system and applied development knowledge to real tasks.",
      date: "February 2 to 6, 2026",
      readTime: "6 min read",
    },
    {
      id: 12,
      image: getImagePath("/ojt5.jpg"),
      category: "Internship",
      title: "8th week of internship",
      excerpt:
        "Explored advanced technologies, generated revenue ideas, and expanded knowledge in SQL, jQuery, and ASP.NET MVC.",
      date: "February 9 to 13, 2026",
      readTime: "6 min read",
    },
    {
      id: 13,
      image: getImagePath("/ojt19.jpg"),
      category: "Internship",
      title: "9th week of internship",
      excerpt:
        "Continued development tasks while improving skills in SQL, jQuery, and ASP.NET MVC.",
      date: "February 16 to 20, 2026",
      readTime: "6 min read",
    },
    {
      id: 14,
      image: getImagePath("/ojt20.jpg"),
      category: "Internship",
      title: "10th week of internship",
      excerpt:
        "Continued system development while improving efficiency and applying learned technologies.",
      date: "February 23 to 27, 2026",
      readTime: "6 min read",
    },
    {
      id: 15,
      image: getImagePath("/ojt10.jpg"),
      category: "Internship",
      title: "11th week of internship",
      excerpt:
        "Applied development skills more independently while continuing system work and improving problem-solving.",
      date: "March 2 to 6, 2026",
      readTime: "6 min read",
    },
    {
      id: 16,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "12th week of internship",
      excerpt:
        "Continued development work while refining skills and preparing for the final phase of the internship.",
      date: "March 9 to 13, 2026",
      readTime: "6 min read",
    },
    {
      id: 17,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "13th week of internship",
      excerpt:
        "Completed the final week of OJT, applying all learned skills and reflecting on overall growth and experience.",
      date: "March 16 to 20, 2026",
      readTime: "6 min read",
    },
    {
      id: 18,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "The Last Day of OJT",
      excerpt:
        "Marked the final day of my OJT, reflecting on growth, achievements, and future goals.",
      date: "March 20, 2026",
      readTime: "6 min read",
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 text-[#F3F4F7]">
            Latest <span className="text-[#B5E3FF]">Blog Posts</span>
          </h2>
          <div className="w-20 h-1 bg-[#B5E3FF] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => onPostClick?.(post.id)}
              className="bg-[#1A1F35] rounded-lg border border-[#C7CCD9]/20 hover:border-[#B5E3FF]/50 transition-all duration-300 overflow-hidden group hover:shadow-lg hover:shadow-[#B5E3FF]/10 hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#B5E3FF] text-[#0D0D12] text-xs rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-[#C7CCD9] text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-[#F3F4F7] text-lg mb-3 group-hover:text-[#B5E3FF] transition-colors">
                  {post.title}
                </h3>

                <p className="text-[#C7CCD9] text-sm mb-4">{post.excerpt}</p>

                <button className="flex items-center gap-2 text-[#B5E3FF] hover:gap-3 transition-all text-sm">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-transparent border-2 border-[#B5E3FF] text-[#B5E3FF] rounded-lg hover:bg-[#B5E3FF]/10 transition-all duration-300">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
}
