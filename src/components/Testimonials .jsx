import React from "react";

const reviews = [
  { id: 1, name: "Alice", text: "CoffeeMood knows my mood perfectly! Love my morning caramel latte.", avatar: "https://i.pravatar.cc/100?img=1" },
  { id: 2, name: "Bob", text: "Amazing coffee suggestions. Brewed my favorite mocha today!", avatar: "https://i.pravatar.cc/100?img=2" },
  { id: 3, name: "Charlie", text: "The mood-based coffee recommendation is just wow. Highly recommend!", avatar: "https://i.pravatar.cc/100?img=3" },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-[#FFF8E1] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#6D4C41] mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-3xl shadow-xl p-8 hover:scale-105 transition-transform duration-500">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 ring-2 ring-[#6D4C41]"
              />
              <p className="italic text-[#3E2723]/90 mb-2">"{review.text}"</p>
              <h4 className="font-bold text-[#6D4C41]">{review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
