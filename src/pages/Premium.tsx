import Navbar from "../components/Navbar";

const Premium = () => {
  return (
    <>
      <Navbar />
      <div className="max-h-screen bg-[#181818] text-white px-1 lg:px-6 py-12 flex items-center justify-center">
        <div className="max-w-4xl bg-[#1f1f1f] p-10 rounded-2xl shadow-lg space-y-8 text-center">
          <h1 className="text-4xl font-bold text-[#62d962]">Go Premium</h1>
          <p className="text-gray-300 text-lg">
            Unlock the full potential of your music experience with our upcoming Premium plan.
          </p>
          <p className="text-gray-500">
            Enjoy exclusive features, ad-free listening, offline access, and more.
            We're working on something amazing for our premium users — stay tuned!
          </p>

          <button
            disabled
            className="mt-4 px-6 py-3 bg-[#62d962] text-black rounded-lg cursor-not-allowed opacity-70"
          >
            Coming Soon
          </button>
        </div>
      </div>
    </>
  );
};

export default Premium;
