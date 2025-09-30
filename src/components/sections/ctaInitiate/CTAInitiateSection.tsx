import { ArrowRight, Clock } from "lucide-react";

const CTAInitiateSection = () => (
  <section className="m-5">
    {/* Outer container with max width and padding x=6 */}
    <div className="max-w-7xl mx-auto px-6">
      {/* Inner content box with additional padding 6 before the blue box */}
      <div className="rounded-3xl bg-[#172d5a] text-white px-6 py-14 flex flex-col md:flex-row justify-between items-center relative overflow-hidden">
        {/* Left Content */}
        <div className="space-y-6 max-w-xl z-10">
          <h2 className="text-3xl md:text-5xl title">
            Geared <span className="text-white">Up</span> to Set Sail?
          </h2>
          <p className="text-lg opacity-90">
            Contact us or initiate your Seaverse account for modern maritime
            learning!
          </p>
          <form className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-l-md px-6 border border-white bg-white py-4 w-64 text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-r-md border border-white px-8 py-4 text-white font-semibold hover:bg-white hover:text-[#1976f6] transition"
            >
              Get Started
            </button>
          </form>
        </div>

        {/* Right Content Box */}
        <div className="flex flex-col gap-6 items-end z-10 mt-8 md:mt-0">
          {/* Add your content here */}
        </div>
      </div>
    </div>
  </section>
);

export default CTAInitiateSection;
