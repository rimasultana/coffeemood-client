import React from "react";
import blog1 from "../../public/img/closeup-cup-delicious-latte-saucer.jpg";
import blog2 from "../../public/img/latte-coffee-cup.jpg";
import blog3 from "../../public/img/delicious-coffee-beans-cup.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Espresso Tips",
    image: blog1,
    excerpt: "Learn how to brew the perfect espresso with these expert tips.",
  },
  {
    id: 2,
    title: "Latte Art Mastery",
    image: blog2,
    excerpt: "Master the art of latte designs with step-by-step guidance.",
  },
  {
    id: 3,
    title: "Choosing Coffee Beans",
    image: blog3,
    excerpt: "Discover how to select the best coffee beans for your taste.",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-[#FFF8E1]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-12">
          Coffee Tips & Blog
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[#3E2723] mb-2">
                  {post.title}
                </h3>
                <p className="text-[#3E2723]/80 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-[#6D4C41] font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
