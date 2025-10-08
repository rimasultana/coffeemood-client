/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Coffee, BookOpen, Heart } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Top 5 Coffee Recipes to Boost Your Mood",
    desc: "Discover how a cup of coffee can transform your mornings and bring joy to your day.",
    img: "../../../public/img/steaming-cup-coffee-saucer-with-coffee-beans-scattered-around.jpg",
    icon: <Coffee size={24} />,
  },
  {
    id: 2,
    title: "The Science Behind Coffee & Happiness",
    desc: "Learn how caffeine and aroma affect your brain and make you feel happier instantly.",
    img: "../../../public/img/dark-coffee-beans-bowl-brown-table.jpg",
    icon: <BookOpen size={24} />,
  },
  {
    id: 3,
    title: "Mindful Coffee Moments",
    desc: "How to enjoy your coffee slowly, mindfully — turning a sip into a soulful experience.",
    img: "../../../public/img/delicious-coffee-beans-cup.jpg",
    icon: <Heart size={24} />,
  },
];

const BlogSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FFF3E0] via-[#FFE0B2] to-[#FFD180] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#4E342E] mb-16 drop-shadow-sm">
          ☕ Coffee Stories & Inspirations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group bg-white/60 backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#D7CCC8]/50"
            >
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6 text-left">
                <div className="flex items-center gap-2 text-[#6D4C41] mb-3">
                  {blog.icon}
                  <span className="font-semibold text-sm tracking-wide uppercase">
                    Coffee Vibes
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#3E2723] mb-2 group-hover:text-[#6D4C41] transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-sm text-[#5D4037]/80 mb-4">{blog.desc}</p>
                <button className="mt-2 text-[#6D4C41] font-semibold group-hover:underline transition-all">
                  Read More →
                </button>
              </div>

              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFE0B2]/50 to-[#FFF8E1]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
