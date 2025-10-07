import { Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#4E342E] text-[#FFEBCD] py-4 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-sm space-y-1">
        <div className="flex items-center gap-2">
          <Coffee size={18} className="text-[#D7CCC8]" />
          <span className="font-semibold">CoffeeMood &copy; 2024</span>
        </div>
        <p className="text-xs text-[#F5EEDC] italic">
          Brewing happiness, one cup at a time ☕
        </p>
      </div>
    </footer>
  );
};

export default Footer;
