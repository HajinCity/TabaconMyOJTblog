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
      date: "Dec 01, 2024",
      readTime: "10 min read",
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
      date: "December 08, 2025",
      readTime: "6 min read",
    },
    {
      id: 6,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "2nd week of internship",
      excerpt:
        "Reflected on onboarding experiences, learning project tools, team collaboration, and foundational software development practices",
      date: "December 15, 2025",
      readTime: "6 min read",
    },
    {
      id: 7,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "3rd week of internship",
      excerpt:
        "Reflected on onboarding experiences, learning project tools, team collaboration, and foundational software development practices",
      date: "January 5, 2026",
      readTime: "6 min read",
    },
    {
      id: 8,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "4th week of internship",
      excerpt:
        "Reflected on onboarding experiences, learning project tools, team collaboration, and foundational software development practices",
      date: "January 12, 2026",
      readTime: "6 min read",
    },
    {
      id: 9,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "5th week of internship",
      excerpt:
        "Reflected on onboarding experiences, learning project tools, team collaboration, and foundational software development practices",
      date: "January 19, 2026",
      readTime: "6 min read",
    },
    {
      id: 10,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "6th week of internship",
      excerpt:
        "Reflected on onboarding experiences, learning project tools, team collaboration, and foundational software development practices",
      date: "January 26, 2026",
      readTime: "6 min read",
    },
    {
      id: 11,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "7th week of internship",
      excerpt:
        "Reflected on onboarding experiences, learning project tools, team collaboration, and foundational software development practices",
      date: "February 2, 2026",
      readTime: "6 min read",
    },
    {
      id: 12,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "8th week of internship",
      excerpt:
        "Reflected on onboarding experiences, learning project tools, team collaboration, and foundational software development practices",
      date: "February 9, 2026",
      readTime: "6 min read",
    },
    {
      id: 13,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "9th week of internship",
      excerpt:
        "Reflected on onboarding experiences, learning project tools, team collaboration, and foundational software development practices",
      date: "February 16, 2026",
      readTime: "6 min read",
    },
    {
      id: 14,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "10th week of internship",
      excerpt:
        "Reflected on onboarding experiences, learning project tools, team collaboration, and foundational software development practices",
      date: "February 23, 2026",
      readTime: "6 min read",
    },
    {
      id: 15,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "11th week of internship",
      excerpt:
        "Reflected on onboarding experiences, learning project tools, team collaboration, and foundational software development practices",
      date: "March 2, 2026",
      readTime: "6 min read",
    },
    {
      id: 16,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "12th week of internship",
      excerpt:
        "Reflected on onboarding experiences, learning project tools, team collaboration, and foundational software development practices",
      date: "March 9, 2026",
      readTime: "6 min read",
    },
    {
      id: 17,
      image: getImagePath("/117.jpg"),
      category: "Internship",
      title: "13th week of internship",
      excerpt:
        "Reflected on onboarding experiences, learning project tools, team collaboration, and foundational software development practices",
      date: "March 16, 2026",
      readTime: "6 min read",
    }
  
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
              {/* Thumbnail */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#B5E3FF] text-[#0D0D12] text-xs rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
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

                {/* Title */}
                <h3 className="text-[#F3F4F7] text-lg mb-3 group-hover:text-[#B5E3FF] transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[#C7CCD9] text-sm mb-4">{post.excerpt}</p>

                {/* Read More Link */}
                <button className="flex items-center gap-2 text-[#B5E3FF] hover:gap-3 transition-all text-sm">
                  Read More
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-transparent border-2 border-[#B5E3FF] text-[#B5E3FF] rounded-lg hover:bg-[#B5E3FF]/10 transition-all duration-300">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
}
