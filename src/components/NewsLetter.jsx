import React from "react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#FFF4E1] via-[#E6B77B] to-[#C68642]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3E2723] mb-6 drop-shadow-sm">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-[#3E2723]/90 mb-8">
          Get the latest coffee tips, blog posts, and special offers directly in
          your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-5 py-3 rounded-full border border-[#6D4C41]/50 focus:outline-none focus:ring-2 focus:ring-[#6D4C41]/40 shadow-sm transition-all duration-300"
          />
          <button className="px-8 py-3 bg-[#6D4C41] hover:bg-[#8D6E63] text-[#FFEBCD] font-bold rounded-full shadow-lg transition-all duration-300">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
