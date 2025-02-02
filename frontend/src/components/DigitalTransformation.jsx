/* eslint-disable react/prop-types */
import { useState } from "react";
import StartUp from "./../assets/img/Study.jpeg";

// BlogCard component
const BlogCard = ({ author, date, title, description, tags }) => (
  <div className="h-[444px] flex flex-col gap-4  shadow-sm rounded-lg overflow-hidden bg-white">
    <div className="flex flex-col">
      <img
        className="w-full h-[240px] object-cover"
        src={StartUp}
        alt={title}
      />
    </div>
    <div className="p-4 flex flex-col gap-2">
      <p className="text-[#667085] text-sm">
        {author} • {date}
      </p>
      <h3 className="font-bold text-[#1A1A1A] text-lg">{title}</h3>
      <p className="text-[#667085] text-sm">{description}</p>
      <div className="flex gap-2 mt-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-[#6941C8] rounded-full px-3 py-1 text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// Main DigitalTransformation component
function DigitalTransformation() {
  // Initial blog posts data
  const initialBlogPosts = [
    {
      author: "Prabhash Mishra",
      date: "1 Jan 2023",
      title: "Small business & Startup",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: ["Tax & Audit", "Management"],
    },
    {
      author: "Prabhash Mishra",
      date: "1 Jan 2023",
      title: "Small business & Startup",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: ["Tax & Audit", "Management"],
    },
    {
      author: "Jane Smith",
      date: "20 Jan 2023",
      title: "AI in Digital Transformation",
      description:
        "Understanding the role of AI in driving digital transformation strategies.",
      tags: ["AI", "Digital Transformation"],
    },
    {
      author: "Jane Smith",
      date: "20 Jan 2023",
      title: "AI in Digital Transformation",
      description:
        "Understanding the role of AI in driving digital transformation strategies.",
      tags: ["AI", "Digital Transformation"],
    },
    {
      author: "Jane Smith",
      date: "20 Jan 2023",
      title: "AI in Digital Transformation",
      description:
        "Understanding the role of AI in driving digital transformation strategies.",
      tags: ["AI", "Digital Transformation"],
    },
    {
      author: "Jane Smith",
      date: "20 Jan 2023",
      title: "AI in Digital Transformation",
      description:
        "Understanding the role of AI in driving digital transformation strategies.",
      tags: ["AI", "Digital Transformation"],
    },
  ];

  // More blog posts data (to simulate loading more)
  const moreBlogPosts = [
    {
      author: "John Doe",
      date: "15 Jan 2023",
      title: "Evolving Technology in Business",
      description:
        "Exploring the impact of emerging technologies on business growth.",
      tags: ["Technology", "Business"],
    },
    {
      author: "Jane Smith",
      date: "20 Jan 2023",
      title: "AI in Digital Transformation",
      description:
        "Understanding the role of AI in driving digital transformation strategies.",
      tags: ["AI", "Digital Transformation"],
    },
    {
      author: "Jane Smith",
      date: "20 Jan 2023",
      title: "AI in Digital Transformation",
      description:
        "Understanding the role of AI in driving digital transformation strategies.",
      tags: ["AI", "Digital Transformation"],
    },
  ];

  // State to hold blog posts
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);

  // Function to load more blogs
  const loadMoreBlogs = () => {
    setBlogPosts((prevPosts) => [...prevPosts, ...moreBlogPosts]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <p className="text-[#EB8D15] font-semibold tracking-wider text-sm">
          EXPLORE OUR BLOGS
        </p>
        <h2 className="text-[#3C2109] text-3xl font-extrabold mt-2">
          Accelerate Digital Transformation
        </h2>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            author={post.author}
            date={post.date}
            title={post.title}
            description={post.description}
            tags={post.tags}
          />
        ))}
      </div>

      {/* View More Blogs Button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={loadMoreBlogs}
          className="px-6 py-3 text-white bg-[#1C4670] cursor-pointer  rounded-lg font-semibold"
        >
          See More Blogs <span>&#8594;</span>
        </button>
      </div>
    </div>
  );
}

export default DigitalTransformation;
